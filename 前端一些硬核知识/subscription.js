class Subscription {
  constructor() {
    this.listeners = [];
  }

  subscribe(cb) {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter(l => l !== cb);
    };
  }

  publish() {
    this.listeners.forEach(l => l())
  }

}

const init = () => {
  const sub = new Subscription();
  const cancel = sub.subscribe(() => {
    console.log('hello')
  })
  sub.publish();
};
init()