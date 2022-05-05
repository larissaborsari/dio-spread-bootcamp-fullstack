<html>
	<head>
		<title> Primeiro Site PHP! Ihu xD</title>
		<script src="https://code.jquery.com/jquery-3.6.0.min.js"
		integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
		crossorigin="anonymous"></script>
		<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
		<style type="text/css">
			#accordion {
				padding: 100px;
			}
			h3 {
				border: 2px solid #E5E6F8;
				padding: 5px;
				background-color: #DAEDF7;
			}
		</style>
	</head>
	<body>
		<div id="accordion">
		  <h3>Do I have any pets?</h3>
		  <div>
			<p>
			Yes! I do! I have two female dogs. One is named Lua (brazilian portuguese word for moon) and the 
			other one is named Jujuba (brazilian portuguese slang for candy). Lua is a Siberian Husky and
			Jujuba is a Golden Retriever.
			</p>
		  </div>
		  <h3>What are my favorite colors?</h3>
		  <div>
			<p>
			My favorite color of all is black, but I also like shades of blue and yellow a lot.
			</p>
		  </div>
		  <h3>What is my favorite meal?</h3>
		  <div>
			<p>
			My favorite meal is very brazilian, I will always prefer to eat a lot of food in a plate, like pasta, meat
			salad, and every complement I can get, than just eat a sandwich or something like this... Here's a list 
			of my dream menu:
			</p>
			<ul>
			  <li>Spaghetti with Butter</li>
			  <li>Fried Chicken Breast / Chikcen Fingers</li>
			  <li>Mashed Potatoes</li
			  <li>Polentinha Frita :3 (only for brazilians)</li>
			</ul>
		  </div>
		  <h3>Bolacha or Biscoito?</h3>
		  <div>
			<p>
			Guess we'll never really know...
			</p>
		  </div>
		</div>
		
		<script type="text/javascript">
			$(document).ready(function() {
				alert("Woohoo");
			});
			$( function() {
				$( "#accordion" ).accordion();
			} );
		</script>
	</body>
</html>