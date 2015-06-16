Smalltalk createPackage: 'CornucopiaScorecardsApp'!
(Smalltalk packageAt: 'CornucopiaScorecardsApp') imports: {'amber/jquery/Wrappers-JQuery'. 'jquery-ui'}!
Object subclass: #CornucopiaScorecardsApp
	instanceVariableNames: ''
	package: 'CornucopiaScorecardsApp'!

!CornucopiaScorecardsApp methodsFor: 'private-starting'!

initializeSupplierAutoComplete
	'#suppliers' asJQuery autocomplete: #{ 'source' -> [ :req :res |
		| matches matchStrings | 
		matches := CrEggSupplier brandsStartingWith: req term.
		matchStrings := matches collect: [ :e | e printString ].
		res value: matchStrings ] }.
!

listSuppliers
	CrEggSupplier allAphabeticalByBrand do: [ :e | '#supplier-list' asJQuery append: '<li>', e printString, '</li>' ]
! !

!CornucopiaScorecardsApp methodsFor: 'starting'!

augmentPage
	self initializeSupplierAutoComplete.
	self listSuppliers.
! !

!CornucopiaScorecardsApp class methodsFor: 'starting'!

start
	self new augmentPage
! !

