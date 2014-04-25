Reveal.addEventListener('ready', function (event) {

});

var createMobileDevicesChart = function () {
    var mobileDeviceDistributionData = {
        labels: ["IPhone", "IPad", "Galaxy S4", "Galaxy S3", "Galaxy S2", "Galaxy S4 Mini", "HTC One", "Galaxy Tab 2", "Galaxy Tab 3", "Galaxy S3 Mini", "Galaxy Note 3", "Galaxy Young", "Sony Xperia Z", "IPod Touch"],
        datasets: [
            {
                fillColor: "rgba(45,144,236,0.7)",
                strokeColor: "rgba(45,144,236,1)",
                data: [630200, 371500, 59500, 46000, 29000, 15900, 15400, 12900, 10400, 10300, 8400, 8100, 6700, 6100]
            }
        ]
    };

    var mobileDeviceOptions = {
        /* scaleOverride: true,
        scaleSteps: 12,
        scaleStepWidth: 1000,
        scaleStartValue: 0, */
        animationSteps: 80
    };

    var mobileDeviceChartContext = document.getElementById("mobileDeviceChart").getContext("2d");
    var mobileDeviceChart = new Chart(mobileDeviceChartContext).Bar(mobileDeviceDistributionData, mobileDeviceOptions);
};

var createDesktopMobileDistributionChart = function () {
    var desktopMobileDistributionData = [
        {
            value: 69,
            color: "rgba(45,144,236,1)",
            label: "Desktop",
            labelColor: "white"
        },
        {
            value: 22,
            color: "rgba(45,144,236,0.7)",
            label: "Phone",
            labelColor: "white"
        },
        {
            value: 9,
            color: "rgba(45,144,236,0.5)",
            label: "Tablet",
            labelColor: "white"
        }
    ];

    var desktopMobileDistributionChartContext = document.getElementById("desktopMobileDistributionChart").getContext("2d");
    var desktopMobileDistributionChart = new Chart(desktopMobileDistributionChartContext).Pie(desktopMobileDistributionData);
};

var drawCharts = function () {
    createMobileDevicesChart();
    createDesktopMobileDistributionChart();
}


Reveal.addEventListener('slidechanged', function () {
    drawCharts();
}, false);