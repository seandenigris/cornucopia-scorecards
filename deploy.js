define([
    'amber/deploy',
    'bootstrap/dist/js/bootstrap',
    'css!amber-cornucopiascorecards/css/cover',
    'css!amber-cornucopiascorecards/css/eggscores',
    'css!//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui',
    // --- packages to be deployed begin here ---
    'amber-cornucopiascorecards/CornucopiaScorecardsApp',
    'amber-cornucopiascorecards/CornucopiaScorecards',
    'amber-cornucopiascorecards/CornucopiaScorecards-Platform'
    // --- packages to be deployed end here ---
], function (amber) {
    return amber;
});
