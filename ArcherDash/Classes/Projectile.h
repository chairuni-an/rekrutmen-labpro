#pragma once
#include "cocos2d.h"
#include "PhysicsCategory.h"

class Projectile : public cocos2d::Sprite {
public:
	//static Sprite* createPlayer();
	
	Projectile();
	~Projectile();
	static Projectile* create();

	void initOptions();

	void addEvents();
	void touchEvent(cocos2d::Touch* touch, cocos2d::Vec2 _p);

	char getMode();
	void setMode(char a);

private:
	char mode;
};