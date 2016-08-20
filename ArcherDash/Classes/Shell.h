#pragma once
#include "cocos2d.h"
#include "PhysicsCategory.h"

class Shell : public cocos2d::Sprite {
public:
	//static Sprite* createPlayer();
	
	Shell();
	~Shell();
	static Shell* create();

	void initOptions();

	void addEvents();
	void touchEvent(cocos2d::Touch* touch, cocos2d::Vec2 _p);
};