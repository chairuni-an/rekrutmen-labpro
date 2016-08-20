#pragma once
#include "cocos2d.h"
#include "PhysicsCategory.h"

class Player : public cocos2d::Sprite {
public:
	//static Sprite* createPlayer();
	
	Player();
	~Player();
	static Player* create();

	void initOptions();

	void addEvents();
	void touchEvent(cocos2d::Touch* touch, cocos2d::Vec2 _p);



	int getArrow();
	int getShell();
	char getMode();
	static int getJump();
	void setArrow(int a);
	void setShell(int a);
	void setMode(char a);
	static void setJump(int a);

private:
	int arrow;
	int shell;
	char mode;
	static int jump;
};
