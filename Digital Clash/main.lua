-- Collision detection 
function CheckCollisionDown(x1,y1,w1,h1, x2,y2,w2,h2)
	return x1+w1 > x2 and x1 < x2+w2 and y1+h1 > y2 and y1+h1 < y2+10
end

function CheckCollisionUp(x1,y1,w1,h1, x2,y2,w2,h2)
	return x1+w1 > x2 and x1 < x2+w2 and y1 < y2+h2 and  y1 > y2+h2-10
end

function CheckCollisionLeft(x1,y1,w1,h1, x2,y2,w2,h2)
	return y1+h1 > y2 and y1+h1 < y2+h2 and x1 < x2+w2 and x1 > x2+w2-10
end

function CheckCollisionRight(x1,y1,w1,h1, x2,y2,w2,h2)
	return y1+h1 > y2 and y1+h1 < y2+h2 and x1+w1 < x2 and x1+w1 > x2-10
end

debug = true
player = { x = 600, y = 300, speed = 150, img = nil }
isAlive = true

-- Timers
canJump = true
canJumpTimerMax = 1
canJumpTimer = -1

canFist = true
canFistTimerMax = 0.2
canFistTimer = -1

-- Checker
CheckAllCollisionDown = false
CheckAllCollisionUp = false
CheckAllCollisionLeft = false
CheckAllCollisionRight = false

-- Images
landsImg = nil -- Like other images we'll pull this in during out love.load function
  
-- More storage
lands = {} -- array of current enemies on screen

function love.load(arg)
    player.img = love.graphics.newImage('assets/player.png')
    backgroundImg = love.graphics.newImage('assets/background.png')
    --we now have an asset ready to be used inside Love
    landsImg = love.graphics.newImage('assets/land-basic-down.png')
	newlands = { x=280, y=620, img=landsImg }
	table.insert(lands, newlands)
	
    landsImg = love.graphics.newImage('assets/land-basic-up.png')
	newlands = { x=280, y=0, img=landsImg }
	table.insert(lands, newlands)
	
    landsImg = love.graphics.newImage('assets/land-basic-left.png')
	newlands = { x=280, y=0, img=landsImg }
	table.insert(lands, newlands)
	
    landsImg = love.graphics.newImage('assets/land-basic-right.png')
	newlands = { x=1000, y=0, img=landsImg }
	table.insert(lands, newlands)
	
    landsImg = love.graphics.newImage('assets/land-float.png')
	newlands = { x=420, y=400, img=landsImg }
	table.insert(lands, newlands)
	
    landsImg = love.graphics.newImage('assets/land-float-big.png')
	newlands = { x=540, y=250, img=landsImg }
	table.insert(lands, newlands)
end

-- Updating
function love.update(dt)
	-- shortcut to quit
	if love.keyboard.isDown('escape') then
		love.event.push('quit')
	end
	
	canFistTimer = canFistTimer - (1 * dt)
	if canFistTimer <= 0 then
		canFist = true
		player.img = love.graphics.newImage('assets/player.png')
	end
	
	canJumpTimer = canJumpTimer - (1 * dt)
	if canJumpTimer > 0.5 then
		for j, land in ipairs(lands) do
			if CheckCollisionUp(player.x, player.y, player.img:getWidth(), player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
				CheckAllCollisionUp = true
			end
		end
		if CheckAllCollisionUp == false then
			player.y = player.y - (500*dt)
		else
			canJumpTimer = 0.5
			CheckAllCollisionUp = false
		end
	elseif canJumpTimer <= 0.5 then
		for j, land in ipairs(lands) do
			if CheckCollisionDown(player.x, player.y, player.img:getWidth(), player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
				CheckAllCollisionDown = true
			end
		end
		if CheckAllCollisionDown == false then
			player.y = player.y + (500*dt)
			canJump = false
		else 
			canJump = true
			CheckAllCollisionDown = false
		end
	end
	
	if love.keyboard.isDown('left','a') then
		for j, land in ipairs(lands) do
			if CheckCollisionLeft(player.x, player.y, player.img:getWidth(), player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
				CheckAllCollisionLeft = true
			end
		end
		if CheckAllCollisionLeft == false then -- binds us to the map
			player.x = player.x - (player.speed*dt)
		else
			CheckAllCollisionLeft = false
		end
	elseif love.keyboard.isDown('right','d') then
		for j, land in ipairs(lands) do
			if CheckCollisionRight(player.x, player.y, player.img:getWidth(), player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
				CheckAllCollisionRight = true
			end
		end
		if CheckAllCollisionRight == false then -- binds us to the map
			player.x = player.x + (player.speed*dt)
		else
			CheckAllCollisionRight = false
		end
	end
	
	if love.keyboard.isDown('up','w') and canJump then
		if player.y < (love.graphics.getHeight() - player.img:getHeight()) then
			canJump = false
			canJumpTimer = canJumpTimerMax
		end
	end
	
	if love.keyboard.isDown('e') and canFist then
		player.img = love.graphics.newImage('assets/player-fist.png')
		canFist = false
		canFistTimer = canFistTimerMax
	end
	
	if not isAlive and love.keyboard.isDown('r') then
		-- reset timers
		canShootTimer = canShootTimerMax
		createEnemyTimer = createEnemyTimerMax

		-- move player back to default position
		player.x = 600
		player.y = 300

		-- reset our game state
		isAlive = true
	end
end

function love.draw(dt)
	love.graphics.draw(backgroundImg, 280,0)
    if isAlive then
		love.graphics.draw(player.img, player.x, player.y)
	else
		love.graphics.print("Press 'R' to restart", love.graphics:getWidth()/2-50, love.graphics:getHeight()/2-10)
	end
	
	for i, land in ipairs(lands) do
		love.graphics.draw(land.img, land.x, land.y)
	end
end
