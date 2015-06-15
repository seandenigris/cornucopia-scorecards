Smalltalk createPackage: 'CornucopiaScorecards'!
(Smalltalk packageAt: 'CornucopiaScorecards') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #CornucopiaScorecards
	instanceVariableNames: ''
	package: 'CornucopiaScorecards'!

!CornucopiaScorecards methodsFor: 'action'!

doAmberWith
	| tag |
	tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.
	tag with: [ :html | html li with: 'Amber Web #with: added me!!' ]
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
!

doSilkTAG
	'#output-list' asSilk LI: 'Silk TAG: added me!!'
! !

!CornucopiaScorecards methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ]
! !

!CornucopiaScorecards class methodsFor: 'starting'!

start
	self new augmentPage
! !

