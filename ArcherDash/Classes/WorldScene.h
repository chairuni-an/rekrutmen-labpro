#pragma once

#include "cocos2d.h"
#include "Player.h"
#include "Animal.h"
#include "Projectile.h"
#include "Monster.h"
#include "Rock.h"
#include "Quiver.h"
#include "Shell.h"
#include "GameOverScene.h"

class WorldScene : public cocos2d::Layer
{
public:
	static cocos2d::Scene* createScene();
	virtual bool init();
	void addMonster(float dt);
	void addAnimal(float dt);
	void addRock(float dt);
	void addQuiver(float dt);
	void addShell(float dt);

	void addLineRock(float dt);

	void mouseClick(cocos2d::Event* event, Player* player);
	void mouseScroll(cocos2d::Event* event, Player* player);
	void keyCommand(cocos2d::EventKeyboard::KeyCode keyCode, cocos2d::Event* event, Player* player);
	bool onContactBegin(cocos2d::PhysicsContact &contact);

	int getScore();
	void setScore(int a);

	void setArrow(int a);
	void setShell(int a);
	void setMode(char a);
	void setSpeed(float a);

	void death();

	CREATE_FUNC(WorldScene);

private:
	int score;
	float speed;
	cocos2d::Label* scoreboard;
	cocos2d::Label* mode;
	cocos2d::Label* arrow;
	cocos2d::Label* shell;
};