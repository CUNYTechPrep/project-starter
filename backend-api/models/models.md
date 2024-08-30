# Models

This app uses the [Sequelize ORM (v6)](https://sequelize.org/) for connecting to our Database.

## `./models/index.js`

This file auto imports all Sequelize models defined in a file ending in `.model.js`

> This file _should not be edited_, except for the `config` and only edit if you have a special database setup and _you know what you are doing_.

## Creating models

Here is an example model file:

Filename: `MicroPost.model.js`

```js
import { Model } from "sequelize";

// NOTE: Ensure you export this function for initialization
export default initMicroPost = (sequelize, DataTypes) => {
  class MicroPost extends Model {}

  MicroPost.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "MicroPost", // NOTE: This should match your class name
    }
  );

  /*
  // NOTE: Uncomment this method to make associations to other models
  MicroPost.associate = (models) => {
    // associations can be defined here
  };
  */

  return MicroPost;
};
```

Things to look out for:

- **Required:** Model filename must end in `.model.js`. Without this extension, the `./models/index.js` file won't be able to initialize the model.
- For consistency, name your model filename with the model class name (`MicroPost`) you want to use in your code. For the example above we named the file `MicroPost.model.js`.
- For consistency, we also set the `modelName: "MicroPost"` to the class name as well
- The postgresql database table name will be the plural version of your modelName: i.e. `MicroPosts`

Documentation:

- https://sequelize.org/docs/v6/core-concepts/model-basics/#extending-model
- https://sequelize.org/api/v6/class/src/model.js~model#static-method-init

# Using the database models

To use these models in your controllers you should import them from `./models/index.js`. Below are common import statements that will not work due to sequelizes initialization step or how ESM imports work.

```js
// correct method to use db models ✅
import db from "../models/index.js";
const { MicroPost } = db; // or use `db.MicroPost`

// The following methods will NOT work
import { MicroPost } from "../models/index.js"; // ❌
import { MicroPost } from "../models/MicroPost.model.js"; // ❌
import MicroPost from "../models/MicroPost.model.js"; // ❌
```
