Smalltalk createPackage: 'CornucopiaScorecards'!
Object subclass: #CrEggSupplier
	instanceVariableNames: 'brand company rating location marketArea totalScore'
	package: 'CornucopiaScorecards'!

!CrEggSupplier methodsFor: 'accessing'!

brand
	^ brand
!

brand: aString
	brand := aString
!

company
	^ company
!

company: aString
	company := aString
!

location
	^ location
!

location: aString
	location := aString
!

marketArea
	^ marketArea
!

marketArea: aString
	marketArea := aString
!

rating
	^ rating
!

rating: anInteger
	rating := anInteger
!

totalScore
	^ totalScore
!

totalScore: anInteger
	totalScore := anInteger
! !

!CrEggSupplier methodsFor: 'printing'!

printOn: aStream
	aStream
		nextPutAll: brand;
		nextPutAll: ' is rated a ';
		print: rating
! !

CrEggSupplier class instanceVariableNames: 'all'!

!CrEggSupplier class methodsFor: 'accessing'!

all
	"In the Pharo version, #downloadAll returns the collection, but I can't figure out how to do that in Amber.
	I asked a question on the mailing list http://forum.world.st/Baffling-Difference-between-Workspace-and-Inspector-tt4832487.html
	But for now, we'll just modify slightly. I guess we could also just tweak the Pharo version to set #all: in #downloadAll"
	"^ all ifNil: [ all := self downloadAll ]"
	all ifNil: [ self downloadAll ].
	^ all
!

allAphabeticalByBrand
	^ self all asOrderedCollection sort: [ :a :b | a brand < b brand ]
!

brandsStartingWith: aString

	^ self allAphabeticalByBrand select: [ :e | e brand beginsWith: aString ]
! !

!CrEggSupplier class methodsFor: 'private'!

all: aCollection
	all := aCollection
! !

