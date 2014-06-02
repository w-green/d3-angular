angular.module('d3Example', ['d3'])
	.directive('d3Barchart', ['d3Service', function(d3Service) {
		return {
			restrict: 'A',
			scope: {
				data: '='
			},
			link: function(scope, ele, attrs) {
				d3Service.d3().then(function(d3) {
					var data = scope.data;
					
					// SVG chart

					var width = 420,
					    barHeight = 20;

					var x = d3.scale.linear()
					    .domain([0, d3.max(data)])
					    .range([0, width]);

					var chart = d3.select(".chart")
					    .attr("width", width)
					    .attr("height", barHeight * data.length);

					var bar = chart.selectAll("g")
					    .data(data)
					  .enter().append("g")
					    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

					bar.append("rect")
					    .attr("width", x)
					    .attr("height", barHeight - 1);

					bar.append("text")
					    .attr("x", function(d) { return x(d) - 3; })
					    .attr("y", barHeight / 2)
					    .attr("dy", ".35em")
					    .text(function(d) { return d; });
				});
			}
		}
	}]);