module.exports = core => {
  require("@alien.sh/banner")(core);
  require("@alien.sh/highlight")(core);
  require("@alien.sh/paren-tools")(core);
  require("@alien.sh/alien-prompt")(core);
  require("@alien.sh/status-bar")(core);
  require("@alien.sh/tab-completion")(core);
};
