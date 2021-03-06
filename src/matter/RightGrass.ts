import {Level} from '../engine/Level';
import {Ground} from './Ground';
import {
	basepath,
	Direction,
	MarioState,
	SizeState,
	GroundBlocking,
	CollisionType,
	DeathMode,
	MushroomMode,
	images,
	setup
} from '../engine/constants'

export class RightGrass extends Ground {
	constructor(x: number, y: number, level: Level) {
		var blocking = GroundBlocking.right;
		super(x, y, blocking, level);
		this.setImage(images.objects, 922, 438);
	}
}