#pragma once
#include "cocos2d.h"
#include "PhysicsCategory.h"

class Monster : public cocos2d::Sprite {
public:
	//static Sprite* createPlayer();
	
	Monster();
	~Monster();
	static Monster* create();

	void initOptions();

	void addEvents();
	void touchEvent(cocos2d::Touch* touch, cocos2d::Vec2 _p);

	int getHp();
	void setHp(int a);

private:
	int hp;
};