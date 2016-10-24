function Dog (options) {
    var options = options || {};
    this.status = 'normal';
    this.color = options.color;


    if (options.hungry === false) {
      this.hungry = false;
    } else {this.hungry = true}

  };

export { Dog };
