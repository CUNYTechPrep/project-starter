;(async () => {
    const puppeteer = require("puppeteer")
    const fs = require("fs")

    fs.writeFileSync("data.json", "")

    const browser = await puppeteer.launch({ headless: true })

    const page = await browser.newPage()
    await page.goto("https://globalsearch.cuny.edu/CFGlobalSearchTool/search.jsp", {
        timeout: 0,
        waitUntil: "networkidle0",
    })
    page.on("console", log => console[log._type](log._text))

    const collegeCodeNames = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll("input[type=checkbox][name=inst_selection]"),
            checkbox => checkbox.value
        )
    )

    const colleges = []

    for (let i = 17; i < 18 /*collegeCodeNames.length*/; i++) {
        const collegeCodeName = collegeCodeNames[i]

        await page.evaluate(collegeCodeName => {
            document.querySelector(`#${collegeCodeName}`).click()
            document.querySelector("#t_pd").value = "1209"
        }, collegeCodeName)

        await Promise.all([
            page.waitForNavigation(),
            page.click("input[type=submit][name=next_btn]"),
        ])

        const hasUnderGrad = await page.evaluate(() =>
            Array.from(document.querySelector("#courseCareerId"), o => o.value).includes("UGRD")
        )

        if (!hasUnderGrad) {
            await Promise.all([
                page.waitForNavigation(),
                page.click("input[type=submit][name=back_btn_search]"),
            ])

            await page.evaluate(collegeCodeName => {
                document.querySelector(`#${collegeCodeName}`).click()
            }, collegeCodeName)

            continue
        }

        const subjectCodeNames = await page.evaluate(() => {
            return Array.from(document.querySelector("#subject_ld").options, option =>
                option.value.trim()
            )
        })

        await Promise.all([
            page.waitForNavigation(),
            page.click("input[type=submit][name=back_btn_search]"),
        ])

        let college = await page.evaluate(collegeCodeName => {
            const collegeNode = document.querySelector(`label[for=${collegeCodeName}]`)
            const termNode = document.querySelector("#t_pd")

            return {
                college: collegeNode.innerText.trim(),
                term: termNode.options[termNode.selectedIndex].text.trim(),
                courses: [],
            }
        }, collegeCodeName)

        for (let j = 1; j < subjectCodeNames.length; j++) {
            await Promise.all([
                page.waitForNavigation(),
                page.click("input[type=submit][name=next_btn]"),
            ])

            await page.evaluate(subjectCodeName => {
                document.querySelector("#subject_ld").value = subjectCodeName
                document.querySelector("#courseCareerId").value = "UGRD"
                document.querySelector("#open_classId").click()
            }, subjectCodeNames[j])

            await Promise.all([page.waitForNavigation(), page.click("#btnGetAjax")])

            const courseNotFound = await page.evaluate(() => {
                return document.querySelector("table[class=SSSMSGWARNINGFRAMEWBO]") !== null
            })

            if (courseNotFound) {
                await Promise.all([
                    page.waitForNavigation(),
                    page.click("input[type=submit][name=back_btn_search]"),
                ])

                continue
            }

            const courses = await page.evaluate(() => {
                const courseTopics = Array.from(
                    document.querySelectorAll(
                        `div[id=contentDivImg_inst0] span[class=cunylite_LABEL]`
                    ),
                    courseElement => courseElement.innerText.trim()
                )

                const courseSections = Array.from(
                    document.querySelectorAll(
                        `div[id=contentDivImg_inst0] div[id^=contentDivImg] table tbody`
                    ),
                    tbody => {
                        const sections = []
                        const myTrim = string =>
                            string
                                .replaceAll(/(<br ?\/?>)/g, " | ")
                                .replaceAll("&nbsp;", "")
                                .trim()

                        for (let row = 1; row < tbody.rows.length; row++) {
                            sections.push({
                                classCode: tbody.rows[row].cells[1].innerText.trim(),
                                section: tbody.rows[row].cells[2].innerText.trim(),
                                daysAndTime: myTrim(tbody.rows[row].cells[3].innerHTML),
                                room: myTrim(tbody.rows[row].cells[4].innerHTML),
                                instructor: myTrim(tbody.rows[row].cells[5].innerHTML),
                                instructionMode: tbody.rows[row].cells[6].innerText.trim(),
                                meetingDates: myTrim(tbody.rows[row].cells[7].innerHTML),
                            })
                        }

                        return sections
                    }
                )

                const courses = courseSections.map((sections, index) => ({
                    topic: courseTopics[index],
                    sections,
                }))

                return courses
            })

            college.courses.push(...courses)

            if (j == subjectCodeNames.length - 1) {
                await Promise.all([
                    page.waitForNavigation(),
                    page.click("input[type=submit][name=new_search]"),
                ])
            } else {
                await Promise.all([
                    page.waitForNavigation(),
                    page.click("input[type=submit][name=modify_search]"),
                ])
            }
        }

        colleges.push(college)
    }

    fs.appendFileSync("data.json", JSON.stringify(colleges, null, "\t"))

    await browser.close()
})()
