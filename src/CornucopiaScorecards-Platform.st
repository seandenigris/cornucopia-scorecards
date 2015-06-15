Smalltalk createPackage: 'CornucopiaScorecards-Platform'!
!CrEggSupplier class methodsFor: '*CornucopiaScorecards-Platform'!

downloadAll
	"This must be done syncronously. Solution adapted from http://stackoverflow.com/questions/13009755/getjson-synchronous"

	| response |
	response := JQuery current ajax: #{ #dataType -> 'json'. #url -> './egg_suppliers.json'. #async -> false }.
	^ response responseJSON collect: [ :e |
		| supplier |
		supplier := CrEggSupplier new.
		e keysAndValuesDo: [ :k :v | supplier instVarNamed: k put: v ].
		supplier ].
! !

!ProtoObject methodsFor: '*CornucopiaScorecards-Platform'!

instVarNamed: aString put: anObject
	^ self instVarAt: aString put: anObject
! !

!Stream methodsFor: '*CornucopiaScorecards-Platform'!

print: anObject

	anObject printOn: self
! !

