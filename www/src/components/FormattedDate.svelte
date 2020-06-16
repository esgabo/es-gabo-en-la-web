<script>
	export let date;

	if (!(date instanceof Date)) {
		date = new Date(date);
	}
	
	function pad(str) {
		return str.padStart(2, '0');
	}

	const y = pad(date.getFullYear() + '');
	const m = pad((date.getMonth()+1) + '');
	const d = pad(date.getDate() + '');
	const h = pad(date.getHours() + '');
	const mi = pad(date.getMinutes() + '');

	const formattedDate = `${d}-${m}-${y} ${h}:${mi}`;

</script>
<span>{formattedDate}</span>
