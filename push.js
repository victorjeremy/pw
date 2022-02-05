var push = require('web-push');
 //let vapidKeys = push.generateVAPIDKeys();
 //console.log(vapidKeys);

 let vapidKeys = { 
	publicKey: 'BJb1RtP3lYyCiF3dCWFJhqeDY1IhrBapNJ8dG9NxH4Thyhq2fCqZZQogkvYdAr6K6Krdyd3qKSBXOTL6pyxaP60',
	privateKey: 'bjsKPV9CGilFyiw5fPElOcru3aYcXjsukzIX1vjM0GI' }


	push.setVapidDetails('mailto:jimmy777766@yahoo.com', vapidKeys.publicKey, vapidKeys.privateKey);

	let sub = {};
	push.sendNotification(sub, 'test message');
