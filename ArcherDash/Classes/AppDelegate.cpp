#include "AppDelegate.h"
#include "HelloWorldScene.h"
#include "WorldScene.h"
#include "MenuScene.h"

USING_NS_CC;

AppDelegate::AppDelegate() {

}

AppDelegate::~AppDelegate()
{
}

bool AppDelegate::applicationDidFinishLaunching() {
	auto director = Director::getInstance();
	auto glview = director->getOpenGLView();
	if (!glview) {
		glview = GLViewImpl::create("Archer Dash");
		director->setOpenGLView(glview);
		glview->setFrameSize(600, 800);
	}

	auto menuscene = MenuScene::createScene();
	director->runWithScene(menuscene);

	//auto scene = WorldScene::createScene();
	//director->runWithScene(scene);

	return true;
}

void AppDelegate::applicationDidEnterBackground() {
}

void AppDelegate::applicationWillEnterForeground() {
}
