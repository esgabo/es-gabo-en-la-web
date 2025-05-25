<script>
	export let date;
	export let displayTime = true;

	if (!(date instanceof Date)) {
		date = new Date(date);
	}
	
	function pad(str) {
		return str.padStart(2, '0');
	}

	const y = pad(date.getFullYear() + '');
	const m = pad((date.getMonth()+1) + '');
	const d = pad(date.getDate() + '');

	let formattedDate = `${d}-${m}-${y}`;

	if (displayTime) {
		const h = pad(date.getHours() + '');
		const mi = pad(date.getMinutes() + '');
		formattedDate += ` ${h}:${mi}`;
	}

</script>
<span>{formattedDate}</span>
