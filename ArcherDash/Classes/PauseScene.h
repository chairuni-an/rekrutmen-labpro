#pragma once

#include "cocos2d.h"
#include "HelpScene.h"

class PauseScene : public cocos2d::Layer
{
public:
	static cocos2d::Scene* createScene();
	virtual bool init();

	void playGame();

	CREATE_FUNC(PauseScene);

};