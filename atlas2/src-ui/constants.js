var keyMirror = require('keymirror');

module.exports = {
  ACTION_TYPES : keyMirror({
      WORKSPACE_OPEN_NEW_WORKSPACE_DIALOG : null,
      WORKSPACE_CLOSE_NEW_WORKSPACE_DIALOG : null,
      WORKSPACE_SUBMIT_NEW_WORKSPACE_DIALOG : null,
      MAP_OPEN_NEW_WORKSPACE_DIALOG : null,
      MAP_CLOSE_NEW_WORKSPACE_DIALOG : null,
      MAP_CLOSE_SUBMIT_EDIT_WORKSPACE_DIALOG : null,
      PALETTE_DRAG_STARTED : null,
      PALETTE_DRAG_STOPPED : null,
      CANVAS_RESIZED : null
  })
};
