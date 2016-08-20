#pragma once

#include "cocos2d.h"

class HelpScene : public cocos2d::Layer
{
public:
	static cocos2d::Scene* createScene();
	virtual bool init();

	void playGame();

	CREATE_FUNC(HelpScene);

};