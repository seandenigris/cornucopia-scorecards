Smalltalk createPackage: 'CornucopiaScorecards-Platform'!
!CrEggSupplier class methodsFor: '*CornucopiaScorecards-Platform'!

downloadAll

	JQuery current
		getJSON: './egg_suppliers.json'
		onSuccess: [ :json | | suppliers |
			suppliers := json collect: [ :e |
				| supplier |
				supplier := CrEggSupplier new.
				e keysAndValuesDo: [ :k :v | supplier instVarAt: k put: v ].
				supplier ].
			self all: suppliers ].
! !

!ProtoObject methodsFor: '*CornucopiaScorecards-Platform'!

instVarNamed: aString put: anObject
	^ self instVarAt: aString put: anObject
! !

!Stream methodsFor: '*CornucopiaScorecards-Platform'!

print: anObject

	anObject printOn: self
! !

