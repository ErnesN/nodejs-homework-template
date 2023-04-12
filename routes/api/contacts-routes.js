const express = require("express");

const ctrl = require("../../controllers/contacts-controllers");

const { validateBody } = require("../../utils");

const schemas = require("../../schemas/contacts.js");

const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(schemas.schema), ctrl.addContact);

router.delete("/:contactId", ctrl.removeContactById);

router.put("/:contactId", validateBody(schemas.schema), ctrl.updateContactById);

module.exports = router;
