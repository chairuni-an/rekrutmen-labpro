#pragma once
#include "cocos2d.h"
#include "PhysicsCategory.h"

class Animal : public cocos2d::Sprite {
public:
	//static Sprite* createPlayer();
	
	Animal();
	~Animal();
	static Animal* create();

	void initOptions();

	void addEvents();
	void touchEvent(cocos2d::Touch* touch, cocos2d::Vec2 _p);

	int getHp();
	void setHp(int a);

private:
	int hp;
};