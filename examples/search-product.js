const DeGiro = require('..');

(async () => {
    const degiro = DeGiro.create({
         username: '',
         password: '',
    });

    await degiro.login();

    console.log(await degiro.searchProduct({text: 'AAPL'}));
})();
