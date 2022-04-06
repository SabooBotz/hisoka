/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['6282145203493','6282145203493','6282145203493']
global.premium = ['6282145203493']
global.packname = 'Created By'
global.author = 'Sabo'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ _Berhasil!_',
    admin: '_Fitur Ini Khusus Admin Group!_',
    botAdmin: '_Bot Harus Menjadi Admin Terlebih Dahulu!_',
    owner: '_Fitur Ini Khusus Owner Bot_',
    group: '_Fitur Ini Hanya Bisa Digunakan Di Dalam Group!_',
    private: '_Fitur Ini Hanya Bisa Digunakan Di Private Chat!_',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_Loading..._',
    endLimit: 'Limit Anda Sudah Habis, Limit Akan Di Reset Setiap Jam 9',
}
global.limitawal = {
    premium: "Infinity",
    free: 20
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
