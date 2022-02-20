function callMyself() {
  callMyself();
}

callMyself();
//The callMyself() will run until the browser throws a “Maximum call size exceeded”. And that is a stack overflow.
