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

					var x = d3.scale.linear()
					    .domain([0, d3.max(data)])
					    .range([0, 420]);
					d3.select(".chart")
						  .selectAll("div")
						    .data(data)
						  .enter().append("div")
						    .style("width", function(d) { return x(d) + "px"; })
						    .text(function(d) { return d; });
				});
			}
		}
	}]);