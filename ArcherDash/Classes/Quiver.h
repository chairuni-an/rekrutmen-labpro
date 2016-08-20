#pragma once
#include "cocos2d.h"
#include "PhysicsCategory.h"

class Quiver : public cocos2d::Sprite {
public:
	//static Sprite* createPlayer();
	
	Quiver();
	~Quiver();
	static Quiver* create();

	void initOptions();

	void addEvents();
	void touchEvent(cocos2d::Touch* touch, cocos2d::Vec2 _p);
};