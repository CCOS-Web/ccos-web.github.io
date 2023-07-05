function system(command){
	command = command.trim();
	var cmd=command.split(' ')[0];
	var argv=command.substring(0, command.length).trim().split(' ');
	switch(cmd){
		case "hello,world":
			console.log('hello, world');
			break;
		case "show":
			console.log(cmd, argv);
			break;
		case "start":
			switch(argv[1]){
				case "allapp":
					addwin('application/store/store.html', 'App Store');
					break;
				case "settings":
					addwin('application/settings/settings.html'+(argv[2]?('#:'+argv[2]):''), 'Settings');
					break;
			}
			break;
	}
}