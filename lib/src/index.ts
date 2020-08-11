const addon = require('../../native');

const hello = () => {
    console.log(addon.hello());
}

export default hello;
