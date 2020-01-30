const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log(`process.argv: ${process.argv}`);
  console.log(`process.argv0: ${process.argv0}`);
  console.log(`process.execArgv: ${process.execArgv}`);
  console.log(`process.execPath: ${process.execPath}`);
  
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
