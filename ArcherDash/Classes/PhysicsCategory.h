#ifndef PHYCAT_H
#define PHYCAT_H
#define border 150
#define contentwidth 600

enum class PhysicsCategory {
	None = 0,
	Animal = (1 << 0),    // 1
	Player = (1 << 1), // 2
	Projectile = 3,
	Quiver = 4,
	All = PhysicsCategory::Animal | PhysicsCategory::Player // 3
};

#endif