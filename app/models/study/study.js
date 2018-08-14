class Study {
  data() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        let data = {
          name: 'zs',
          age: 28
        };
        resolve(data);
      }, 10000);
    });
  }
}

module.exports = new Study();