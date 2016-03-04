<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>jQuery Vertical Example</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width">
	<link rel="apple-touch-icon" href="">
	<link rel="apple-touch-icon" sizes="72x72" href="">
	<link rel="apple-touch-icon" sizes="114x114" href="">
	<link rel="apple-touch-icon" sizes="144x144" href="">
	<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
	<link rel="icon" type="image/x-icon" href="/favicon.ico">
	<link rel="stylesheet" href="css/vendor/normalize.css">
	<link rel="stylesheet" href="css/timeline.css">
	<link rel="stylesheet" href="css/style.css">
</head>

<body>
<div class="example">
	<div id="timeline">
		<?php
			for ($i=0; $i<=5; $i++) {
				$string = file_get_contents("json/example.json");
				$phpArray = json_decode($string, true);
				$rand = rand(0,2);

				$capability = array("video","news");
				$rand_capability = array_rand($capability);
		?>
		<div class="<?php echo $capability[$rand_capability] ?>">
			<div class="title"><h3><? echo $phpArray[$rand]['title'] ?></h3></div>
			<div class="date"><? echo $phpArray[$rand]['date'] ?></div>
			<div class="body">
				<img src="<? echo $phpArray[$rand]['photourl'] ?>">
				<div class="caption">(<? echo $phpArray[$rand]['caption'] ?>)</div>
				<div class="description"><? echo $phpArray[$rand]['body'] ?></div>
			</div>
		</div>
		<?php
			}
		?>

	</div>
</div>

<!-- Include scripts -->
<script type="text/javascript" src="js/vendor/jquery-1.10.4.min.js"></script>
<script type="text/javascript" src="js/plugins.js"></script>
<script type="text/javascript" src="js/timeline.js"></script>
<script type="text/javascript">
	$('#timeline').Timeline({
		sort: true,
		filter: true,
		filterOptions: {
			category:['video', 'news']
		}
	});
</script>

</body>
</html>
