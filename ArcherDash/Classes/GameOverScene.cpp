#include "GameOverScene.h"
#include "ui/CocosGUI.h"
#include "MenuScene.h"

USING_NS_CC;



cocos2d::Scene* GameOverScene::createScene()
{
	auto scene = Scene::create();
	auto layer = GameOverScene::create();
	scene->addChild(layer);

	return scene;
}

bool GameOverScene::init()
{
	if (!Layer::init())
	{
		return false;
	}

	auto origin = Director::getInstance()->getVisibleOrigin();
	auto winSize = Director::getInstance()->getVisibleSize();
	auto background = DrawNode::create();
	background->drawSolidRect(origin, winSize, Color4F(0.6f, 0.6f, 0.9f, 1.0f));
	this->addChild(background);
	
	Vector<MenuItem*> MenuItems;
	auto overLabel = Label::createWithSystemFont("Game Over", "Arial", 18);
	auto overItemLabel = MenuItemLabel::create(overLabel, CC_CALLBACK_0(GameOverScene::replay, this));
	MenuItems.pushBack(overItemLabel);
	auto menu = Menu::createWithArray(MenuItems);
	this->addChild(menu, 1);

	return true;
}

void GameOverScene::replay() {
	//auto scene = MenuScene::createScene();
	//Director::getInstance()->replaceScene(scene);
	Director::getInstance()->popScene();
}