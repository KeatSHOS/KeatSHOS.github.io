
(function waitForTelerik() {
  if (typeof Telerik !== 'undefined') {
    alert(1);
  } else {
    setTimeout(waitForTelerik, 100); // Poll every 100 milliseconds
  }
})();
