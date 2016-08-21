-- Collision detection 
function CheckCollisionDown(x1,y1,w1,h1, x2,y2,w2,h2)
	return x1+w1 >= x2 and x1 <= x2+w2 and y1+h1 >= y2 and y1+h1 <= y2+20
end

function CheckCollisionUp(x1,y1,w1,h1, x2,y2,w2,h2)
	return x1+w1 >= x2 and x1 <= x2+w2 and y1 <= y2+h2 and  y1 >= y2+h2-20
end

function CheckCollisionLeft(x1,y1,w1,h1, x2,y2,w2,h2)
	return ((y1 >= y2 and y1 <= y2+h2) or (y1+h1 >= y2+21 and y1+h1 <= y2+h2)) and x1 <= x2+w2 and x1 >= x2+w2-20
end

function CheckCollisionRight(x1,y1,w1,h1, x2,y2,w2,h2)
	return ((y1 >= y2 and y1 <= y2+h2) or (y1+h1 >= y2+21 and y1+h1 <= y2+h2)) and x1+w1 <= x2+20 and x1+w1 >= x2
end

function CheckCollision(x1,y1,w1,h1, x2,y2,w2,h2)
	return 	x1 <= x2+w2 and
			x2 <= x1+w1 and
			y1 <= y2+h2 and
			y2 <= y1+h1
end

function CheckFist(x1,y1,w1,h1, x2,y2,w2,h2)
	return ((y1 <= y2+h2 and  y1 >= y2+h2/2) or (y1+h1 >= y2+h2/2 and y1+h1 <= y2+h2)) and ((x1 <= x2+w2 and x1 >= x2) or (x1+w1 >= x2 and x1+w1 <= x2+w2))
end

function SetKeyboard(player,lands,bullets,traps,a,d,w,e,q,r,dt)
	if love.keyboard.isDown(a) and player.attacked == false then
		player.direction = 'left'
		for j, land in ipairs(lands) do
			if CheckCollisionLeft(player.x, player.y, player.img:getWidth(), player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
				player.CheckAllCollisionLeft = true
				player.Collide = land
			end
		end
		if player.CheckAllCollisionLeft == false then
			for i, playertemp in ipairs(players) do
				if playertemp.isAlive == true then
					if playertemp ~= player then
						if CheckCollisionLeft(player.x, player.y, player.img:getWidth(), player.img:getHeight(), playertemp.x, playertemp.y, playertemp.img:getWidth(), playertemp.img:getHeight()) then
							player.CheckAllCollisionLeft = true
							player.Collide = playertemp
						end
					end
				end
			end	
		end
		if player.CheckAllCollisionLeft == false then -- binds us to the map
			player.x = player.x - (player.speed*dt)
		else
			player.CheckAllCollisionLeft = false
			player.x = player.Collide.x + player.Collide.img:getWidth() - 1
		end
		
	elseif love.keyboard.isDown(d) and player.attacked == false then
		player.direction = 'right'
		for j, land in ipairs(lands) do
			if CheckCollisionRight(player.x, player.y, player.initialWidth, player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
				player.CheckAllCollisionRight = true
				player.Collide = land
			end
		end
		if player.CheckAllCollisionRight == false then
			for i, playertemp in ipairs(players) do
				if playertemp.isAlive == true then
					if playertemp ~= player then
						if CheckCollisionRight(player.x, player.y, player.img:getWidth(), player.img:getHeight(), playertemp.x, playertemp.y, playertemp.img:getWidth(), playertemp.img:getHeight()) then
							player.CheckAllCollisionRight = true
							player.Collide = playertemp
						end
					end
				end
			end	
		end
		if player.CheckAllCollisionRight == false then -- binds us to the map
			player.x = player.x + (player.speed*dt)
		else
			player.CheckAllCollisionRight = false
			player.x = player.Collide.x - player.img:getWidth() +1
		end
	end
	
	if love.keyboard.isDown(w) and player.canJump and player.attacked == false then
		if player.y < (love.graphics.getHeight() - player.img:getHeight()) then
			player.canJump = false
			player.canJumpTimer = player.canJumpTimerMax
		end
	end
	
	if love.keyboard.isDown(e) and player.attacked == false then
		if player.modeRange then
			if player.canShoot then
				player.img = love.graphics.newImage('assets/char' .. player.selected .. '-range-' .. player.direction .. '.png')
				player.canShoot = false
				player.canShootTimer = player.canShootTimerMax
				bullet = { img = love.graphics.newImage('assets/char' .. player.selected .. '-bullet-' .. player.direction .. '.png'), x = player.x+player.img:getWidth(), y = player.y+10, speed = player.bulletSpeed, damage = player.bulletDamage }
				if player.direction == 'left' then
					bullet.speed = bullet.speed * (-1)
					bullet.x = player.x-50
				end
				table.insert(bullets,bullet)
			end	
		else
			if player.canFist then
				player.canFist = false
				player.canFistTimer = player.canFistTimerMax
				
				if player.canComboTimer < player.canComboTimerMax then
					player.combo = player.combo + 1
				else
					player.combo = 1
					player.canComboTimer = 0
				end
				
				if player.combo == 1 then
					player.img = love.graphics.newImage('assets/char' .. player.selected .. '-fist1-' .. player.direction .. '.png')
				elseif player.combo == 2 then
					player.img = love.graphics.newImage('assets/char' .. player.selected .. '-fist2-' .. player.direction .. '.png')
				elseif player.combo == 3 then
					player.img = love.graphics.newImage('assets/char' .. player.selected .. '-fist3-' .. player.direction .. '.png')
				end
				
				if player.combo > 3 then
					player.combo = 0
					player.canFistTimer = 2
				end
			
				for i, playertemp in ipairs(players) do
					if playertemp.isAlive == true then
						if playertemp ~= player then
							if CheckFist(player.x, player.y, player.img:getWidth(), player.img:getHeight(), playertemp.x, playertemp.y, playertemp.img:getWidth(), playertemp.img:getHeight()) then
								playertemp.health = playertemp.health - 10
								if playertemp.health <= 0 then
									playertemp.health = 0
								end
								playertemp.attacked = true
								playertemp.attackedTimer = 0
								if player.direction == 'left' then
									playertemp.direction = 'right'
								else
									playertemp.direction = 'left'
								end
							end
						end
					end
				end
			end
		end
	end
	
	if love.keyboard.isDown(q) and player.canTrap then
		player.img = love.graphics.newImage('assets/char' .. player.selected .. '-fist1-' .. player.direction .. '.png')
		player.canTrap = false
		trap = { x = player.x, y = player.y, width = 100, height = 100, timer = 0, activeTime = false, active = true }
		table.insert(traps,trap)
	end
	
	if love.keyboard.isDown(r) and player.canChange and player.attacked == false then
		if player.modeRange == false then
			player.modeRange = true
		else
			player.modeRange = false
		end
		player.canChange = false
		player.canChangeTimer = player.canChangeTimerMax
	end
end

function SetJoystick(player,lands,bullets,traps,joystick,dt)
	axisDir1, axisDir2 = joystick:getAxes( )
	if axisDir1 == -1 and player.attacked == false then
		player.direction = 'left'
		for j, land in ipairs(lands) do
			if CheckCollisionLeft(player.x, player.y, player.img:getWidth(), player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
				player.CheckAllCollisionLeft = true
				player.Collide = land
			end
		end
		if player.CheckAllCollisionLeft == false then
			for i, playertemp in ipairs(players) do
				if playertemp.isAlive == true then
					if playertemp ~= player then
						if CheckCollisionLeft(player.x, player.y, player.img:getWidth(), player.img:getHeight(), playertemp.x, playertemp.y, playertemp.img:getWidth(), playertemp.img:getHeight()) then
							player.CheckAllCollisionLeft = true
							player.Collide = playertemp
						end
					end
				end
			end	
		end
		if player.CheckAllCollisionLeft == false then -- binds us to the map
			player.x = player.x - (player.speed*dt)
		else
			player.CheckAllCollisionLeft = false
			player.x = player.Collide.x + player.Collide.img:getWidth() - 1
		end
		
	elseif axisDir1 == 1 and player.attacked == false then
		player.direction = 'right'
		for j, land in ipairs(lands) do
			if CheckCollisionRight(player.x, player.y, player.initialWidth, player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
				player.CheckAllCollisionRight = true
				player.Collide = land
			end
		end
		if player.CheckAllCollisionRight == false then
			for i, playertemp in ipairs(players) do
				if playertemp.isAlive == true then
					if playertemp ~= player then
						if CheckCollisionRight(player.x, player.y, player.img:getWidth(), player.img:getHeight(), playertemp.x, playertemp.y, playertemp.img:getWidth(), playertemp.img:getHeight()) then
							player.CheckAllCollisionRight = true
							player.Collide = playertemp
						end
					end
				end
			end	
		end
		if player.CheckAllCollisionRight == false then -- binds us to the map
			player.x = player.x + (player.speed*dt)
		else
			player.CheckAllCollisionRight = false
			player.x = player.Collide.x - player.img:getWidth() +1
		end
	end
	
	if ((axisDir2 == -1) or (joystick:isDown(3))) and player.canJump and player.attacked == false then
		if player.y < (love.graphics.getHeight() - player.img:getHeight()) then
			player.canJump = false
			player.canJumpTimer = player.canJumpTimerMax
		end
	end
	
	if joystick:isDown(4) and player.attacked == false then
		if player.modeRange then
			if player.canShoot then
				player.img = love.graphics.newImage('assets/char' .. player.selected .. '-range-' .. player.direction .. '.png')
				player.canShoot = false
				player.canShootTimer = player.canShootTimerMax
				bullet = { img = love.graphics.newImage('assets/char' .. player.selected .. '-bullet-' .. player.direction .. '.png'), x = player.x+player.img:getWidth(), y = player.y+10, speed = player.bulletSpeed, damage = player.bulletDamage }
				if player.direction == 'left' then
					bullet.speed = bullet.speed * (-1)
					bullet.x = player.x-50
				end
				table.insert(bullets,bullet)
			end	
		else
			if player.canFist then
				player.canFist = false
				player.canFistTimer = player.canFistTimerMax
				
				if player.canComboTimer < player.canComboTimerMax then
					player.combo = player.combo + 1
				else
					player.combo = 1
					player.canComboTimer = 0
				end
				
				if player.combo == 1 then
					player.img = love.graphics.newImage('assets/char' .. player.selected .. '-fist1-' .. player.direction .. '.png')
				elseif player.combo == 2 then
					player.img = love.graphics.newImage('assets/char' .. player.selected .. '-fist2-' .. player.direction .. '.png')
				elseif player.combo == 3 then
					player.img = love.graphics.newImage('assets/char' .. player.selected .. '-fist3-' .. player.direction .. '.png')
				end
				
				if player.combo > 3 then
					player.combo = 0
					player.canFistTimer = 2
				end
			
				for i, playertemp in ipairs(players) do
					if playertemp.isAlive == true then
						if playertemp ~= player then
							if CheckFist(player.x, player.y, player.img:getWidth(), player.img:getHeight(), playertemp.x, playertemp.y, playertemp.img:getWidth(), playertemp.img:getHeight()) then
								playertemp.health = playertemp.health - 10
								if playertemp.health <= 0 then
									playertemp.health = 0
								end
								playertemp.attacked = true
								playertemp.attackedTimer = 0
								if player.direction == 'left' then
									playertemp.direction = 'right'
								else
									playertemp.direction = 'left'
								end
							end
						end
					end
				end
			end
		end
	end
	
	if joystick:isDown(1) and player.canTrap then
		player.img = love.graphics.newImage('assets/char' .. player.selected .. '-fist1-' .. player.direction .. '.png')
		player.canTrap = false
		trap = { x = player.x, y = player.y, width = 100, height = 100, timer = 0, activeTime = false, active = true }
		table.insert(traps,trap)
	end
	
	if joystick:isDown(2) then
		if player.modeRange == false then
			player.modeRange = true
		else
			player.modeRange = false
		end
		player.canChange = false
		player.canChangeTimer = player.canChangeTimerMax
	end
end

debug = true

function love.load(arg)
	-- Joystick
	joysticks = love.joystick.getJoysticks()
	
	-- Main menu
	mainBackgroundImg = love.graphics.newImage('assets/mainmenu-bg.jpg')
	characterBackgroundImg = love.graphics.newImage('assets/character-bg.jpg')
	matchResultImg = love.graphics.newImage('assets/match-result.png')
	matchResult2Img = love.graphics.newImage('assets/match-result2.png')
	bottomMatchResultImg = love.graphics.newImage('assets/bottom-match-result.png')
	Font = love.graphics.newFont("fonts/zorque.ttf", 18)
	digitalclashImg = love.graphics.newImage('assets/DC.png')
	
	-- Character
	iconChar1 = love.graphics.newImage('assets/char1-icon.png')
	iconChar2 = love.graphics.newImage('assets/char2-icon.png')
	iconChar3 = love.graphics.newImage('assets/char3-icon.png')
	iconChar4 = love.graphics.newImage('assets/char4-icon.png')
	healthbar = love.graphics.newImage('assets/healthbar.png')
	
	-- Controller
	controllerImg1 = love.graphics.newImage('assets/keyboard1-controller.png')
	controllerImg2 = love.graphics.newImage('assets/keyboard2-controller.png')
	controllerImg3 = love.graphics.newImage('assets/joystick-controller.png')
	controllerImg4 = love.graphics.newImage('assets/joystick-controller.png')
	
	-- Land
	lands = {} 
    backgroundImg = love.graphics.newImage('assets/game-background.png')
    
    landsImg = love.graphics.newImage('assets/land-basic-horizontal.png')
	newlands = { x=83, y=600, img=landsImg }
	table.insert(lands, newlands)
	
    landsImg = love.graphics.newImage('assets/land-basic-horizontal.png')
	newlands = { x=83, y=0, img=landsImg }
	table.insert(lands, newlands)
	
    landsImg = love.graphics.newImage('assets/land-basic-vertical.png')
	newlands = { x=8, y=0, img=landsImg }
	table.insert(lands, newlands)
	
    landsImg = love.graphics.newImage('assets/land-basic-vertical.png')
	newlands = { x=1283, y=0, img=landsImg }
	table.insert(lands, newlands)
	
	landsImg = love.graphics.newImage('assets/land-float-1.png')
	newlands = { x=8, y=600, img=landsImg }
	table.insert(lands, newlands)
	
	landsImg = love.graphics.newImage('assets/land-float-1.png')
	newlands = { x=1283, y=600, img=landsImg }
	table.insert(lands, newlands)
	
	landsImg = love.graphics.newImage('assets/land-float-1.png')
	newlands = { x=83, y=225, img=landsImg }
	table.insert(lands, newlands)
	
	landsImg = love.graphics.newImage('assets/land-float-1.png')
	newlands = { x=1208, y=225, img=landsImg }
	table.insert(lands, newlands)
	
	landsImg = love.graphics.newImage('assets/land-float-1.png')
	newlands = { x=1283, y=600, img=landsImg }
	table.insert(lands, newlands)
	
    landsImg = love.graphics.newImage('assets/land-float-3.png')
	newlands = { x=229, y=375, img=landsImg }
	table.insert(lands, newlands)
	
    landsImg = love.graphics.newImage('assets/land-float-3.png')
	newlands = { x=912, y=375, img=landsImg }
	table.insert(lands, newlands)
	
    landsImg = love.graphics.newImage('assets/land-float-6.png')
	newlands = { x=458, y=225, img=landsImg }
	table.insert(lands, newlands)
	
	-- Music
	music = love.audio.newSource("musics/nanobii-happy hardcore.mp3")
	musicfight = love.audio.newSource("musics/pokemon-fight music.mp3")
	
	-- Player
	players = {}
	player = { x = nil, y = 500, speed = 150, img = nil, health = 100, initialWidth = 0, initialHeight = 0, 
				canFist = true, canFistTimerMax = 0.2, canFistTimer = -1, canJump = true, canJumpTimerMax = 1, canJumpTimer = -1, canTrap = true,
				CheckAllCollisionDown = false, CheckAllCollisionUp = false, CheckAllCollisionLeft = false, CheckAllCollisionRight = false,
				canShoot = true, canShootTimerMax = 0.8, canShootTimer = -1, bulletSpeed = 300, bulletDamage = 10,
				canComboTimer = 1, canComboTimerMax = 1, combo = 0, attacked = false, attackedTimer = -1, attackedTimerMax = 0.5, 
				score = 0, scoreNow = 0, selected = nil, rank = -1, direction = 'left', modeRange = false, iconImg = nil, isAlive = false,
				canChange = true, canChangeTimer = -1, canChangeTimerMax = 0.5, Collide = nil, controller = -1}
	for i=1,4 do
		table.insert(players,player)
	end
    
	-- Obstacle
	obstacles = {}
	for i=1,3 do
		obstacleImg = love.graphics.newImage('assets/sprite-obstacle.png')
		tempframe = 7
		obstacle = { frame = tempframe, x=love.math.random( 380, 900-(obstacleImg:getWidth()/tempframe) ), y=love.math.random( 100, 620-obstacleImg:getHeight() ), 
					quads = {}, timerDraw = 0, timerObstacleCollision = 0, timerAppear = 0, timerAppearRandom = love.math.random( 0, 10 ), img = obstacleImg, CheckRandom = true }
		
		for i=0,6 do
			table.insert(obstacle.quads, love.graphics.newQuad(i * obstacle.img:getWidth()/obstacle.frame, 0, obstacle.img:getWidth()/obstacle.frame, obstacle.img:getHeight(), obstacle.img:getWidth(), obstacle.img:getHeight()))
		end
		table.insert(obstacles,obstacle)
	end
	
	-- Trap
	traps = {}
	
	-- Bullet
	bullets = {}
	
	-- Picked Controller
	pickedController = {}
	for i=1, 4 do
		pickedController[i] = -1
	end
	
	-- Phase
	phase = 1
	selected = 1
	timerChoose = 0
	timerMaxChoose = 0.1
	nplayers = 0
	point = 5
	winner = -1
end

-- Updating
function love.update(dt)
	-- Joystick
	joysticks = love.joystick.getJoysticks()
	joystickcount = love.joystick.getJoystickCount()
	
	if phase == 1 then
		music:play()
		music:setLooping(true)
		timerChoose = timerChoose + 1*dt
		if timerChoose > timerMaxChoose then
			if love.keyboard.isDown('down') then
				timerChoose = 0
				selected = selected + 1
				if selected > 2 then
					selected = 1
				end
			elseif love.keyboard.isDown('up') then
				timerChoose = 0
				selected = selected - 1
				if selected < 1 then
					selected = 2
				end
			elseif love.keyboard.isDown('return') then
				timerChoose = 0
				if selected == 1 then
					phase = 2
				else
					love.event.push('quit')
				end
			end
		end
	elseif phase == 2 then
		timerChoose = timerChoose + 1*dt
		if timerChoose > timerMaxChoose then
			if love.keyboard.isDown('down') then
				timerChoose = 0
				selected = selected + 1
				if selected > 1+joystickcount and selected < 4 then
					selected = 4
				end
				if selected > 4 then
					selected = 1
				end
			elseif love.keyboard.isDown('up') then
				timerChoose = 0
				selected = selected - 1
				if selected > 1+joystickcount and selected < 4 then
					selected = 1+joystickcount
				end
				if selected < 1 then
					selected = 4
				end
			elseif love.keyboard.isDown('return') then
				if (selected == 4) then
					timerChoose = 0
					selected = 1
					phase = 1
				else
					timerChoose = 0
					nplayers = selected+1
					phase = 3
					selected = 1
					counterplayer = 1
				end
			end
		end
	elseif phase == 3 then
		if counterplayer <= nplayers then
			timerChoose = timerChoose + 1*dt
			if timerChoose > timerMaxChoose then
				if love.keyboard.isDown('right') then
					timerChoose = 0
					selected = selected + 1
					if (selected > 2+joystickcount and selected < 5) or (selected == 6) then
						selected = 1
					end
				elseif love.keyboard.isDown('left') then
					timerChoose = 0
					selected = selected - 1
					if (selected > 2+joystickcount and selected < 5) or (selected < 1) then
						selected = 2+joystickcount
					end
				elseif love.keyboard.isDown('down') then
					timerChoose = 0
					selected = 5
				elseif love.keyboard.isDown('up') then
					timerChoose = 0
					selected = 1
				end
				i = 1
				while i<=counterplayer-1 do
					j = 1
					foundSelected = false
					while j<=4 and foundSelected == false do 
						if selected == pickedController[j] then
							foundSelected = true
						else
							j = j + 1
						end
					end
					if foundSelected then
						selected = selected + 1
						if selected > 2+joystickcount and selected < 5 then
							selected = 1
						end
					end
					i = i+1
				end
				if love.keyboard.isDown('return') then
					timerChoose = 0
					if selected == 5 then
						phase = 2
						selected = 1	
						counterplayer = 1
						for i=1, 4 do
							pickedController[i] = -1
						end
					else
						player = { x = nil, y = 500, speed = 150, img = nil, health = 100, initialWidth = 0, initialHeight = 0, 
									canFist = true, canFistTimerMax = 0.2, canFistTimer = -1, canJump = true, canJumpTimerMax = 1, canJumpTimer = -1, canTrap = true,
									CheckAllCollisionDown = false, CheckAllCollisionUp = false, CheckAllCollisionLeft = false, CheckAllCollisionRight = false,
									canShoot = true, canShootTimerMax = 0.8, canShootTimer = -1, bulletSpeed = 300, bulletDamage = 10,
									canComboTimer = 1, canComboTimerMax = 1, combo = 0, attacked = false, attackedTimer = -1, attackedTimerMax = 0.5, 
									score = 0, scoreNow = 0, selected = nil, rank = -1, direction = 'left', modeRange = false, iconImg = nil, isAlive = false,
									canChange = true, canChangeTimer = -1, canChangeTimerMax = 0.3, Collide = nil, controller = -1}
						player.controller = selected
						players[counterplayer] = player
						pickedController[counterplayer] = selected
						counterplayer = counterplayer + 1
					end
				end
			end
		else
			timerChoose = 0
			counterplayer = 1
			selected = 1
			phase = 4
			for i=1, 4 do
				pickedController[i] = -1
			end
		end	
	elseif phase == 4 then
		if counterplayer <= nplayers then
			timerChoose = timerChoose + 1*dt
			if timerChoose > timerMaxChoose then
				if love.keyboard.isDown('right') then
					timerChoose = 0
					selected = selected + 1
					if selected > 4 then
						selected = 1
					end
				elseif love.keyboard.isDown('left') then
					timerChoose = 0
					selected = selected - 1
					if selected < 1 then
						selected = 4
					end
				elseif love.keyboard.isDown('down') then
					timerChoose = 0
					selected = 5
				elseif love.keyboard.isDown('up') then
					timerChoose = 0
					selected = 1
				elseif love.keyboard.isDown('return') then
					timerChoose = 0
					if selected == 5 then
						phase = 3
						selected = 1	
						counterplayer = 1
					else
						player = { x = 83+ 1200/nplayers*(counterplayer-1), y = 500, speed = 150, img = nil, health = 100, initialWidth = 0, initialHeight = 0, 
								canFist = true, canFistTimerMax = 0.2, canFistTimer = -1, canJump = true, canJumpTimerMax = 1, canJumpTimer = -1, canTrap = true,
								CheckAllCollisionDown = false, CheckAllCollisionUp = false, CheckAllCollisionLeft = false, CheckAllCollisionRight = false,
								canShoot = true, canShootTimerMax = 0.8, canShootTimer = -1, bulletSpeed = 300, bulletDamage = 10,
								canComboTimer = 1, canComboTimerMax = 1, combo = 0, attacked = false, attackedTimer = -1, attackedTimerMax = 0.5, 
								score = 0, scoreNow = 0, selected = nil, rank = -1, direction = 'left', modeRange = false, iconImg = nil, isAlive = true,
								canChange = true, canChangeTimer = -1, canChangeTimerMax = 0.3, Collide = nil, controller = -1}
						player.controller = players[counterplayer].controller
						players[counterplayer] = player
						players[counterplayer].selected = selected
						players[counterplayer].img = love.graphics.newImage("assets/char".. players[counterplayer].selected .."-" .. players[counterplayer].direction .. ".png")
						players[counterplayer].iconImg = love.graphics.newImage("assets/char".. players[counterplayer].selected .."-icon.png")
						players[counterplayer].initialWidth = players[counterplayer].img:getWidth()
						players[counterplayer].initialHeight = players[counterplayer].img:getHeight()
						if players[counterplayer].x < 683 then
							players[counterplayer].direction = 'right' 
						else
							players[counterplayer].direction = 'left'
						end
						counterplayer = counterplayer + 1
					end
				end
			end
		else
			phase = 5
			point = 5
			winner = -1
		end
	elseif phase == 5 then
		music:stop()
		musicfight:play()
		musicfight:setLooping(true)
		-- Obstacle
		for i, obstacle in ipairs (obstacles) do
			obstacle.timerAppear = obstacle.timerAppear + dt * 1
			
			if obstacle.timerAppear > obstacle.timerAppearRandom then
				obstacle.timerDraw = obstacle.timerDraw + dt * 8
				obstacle.timerObstacleCollision = obstacle.timerObstacleCollision + (dt * 1)
				if obstacle.timerObstacleCollision/1 > 1 then
					for j, player in ipairs (players) do
						if player.isAlive == true then
							if CheckCollision(player.x, player.y, player.img:getWidth(), player.img:getHeight(), obstacle.x, obstacle.y, obstacle.img:getWidth()/obstacle.frame, obstacle.img:getHeight()) then
								player.health = player.health - 10
								if player.health <= 0 then
									player.health = 0
								end
								player.attacked = true
								player.attackedTimer = 0
								if player.x < obstacle.x + (obstacle.img:getWidth()/2) then
									player.direction = 'right'
								else
									player.direction = 'left'
								end
							end
							obstacle.timerObstacleCollision = 0
							obstacle.timerAppear = 0
						end
					end
				end
			end
		end
		
		-- Trap
		for i, trap in ipairs(traps) do
			if trap.timer>4 and trap.active then
				trap.activeTime = true
			else
				trap.timer = trap.timer + 1*dt
			end
			if trap.activeTime then
				for j, player in ipairs (players) do
					if player.isAlive == true then
						if CheckCollision(player.x, player.y, player.img:getWidth(), player.img:getHeight(), trap.x, trap.y, trap.width, trap.height) then
							player.health = player.health - 50
							if player.health <= 0 then
								player.health = 0
							end
							player.attacked = true
							player.attackedTimer = 0
							if player.x < trap.x + (trap.width/2) then
								player.direction = 'right'
							else
								player.direction = 'left'
							end
							trap.active = false
							trap.activeTime = false
						end
					end
				end
			end
		end
		
		-- Bullet
		for i, bullet in ipairs(bullets) do
			bullet.x = bullet.x + bullet.speed * dt
			checkAllCollBullet = false
			for j, player in ipairs(players) do
				if player.isAlive == true then
					if CheckCollision(bullet.x, bullet.y, bullet.img:getWidth(), bullet.img:getHeight(), player.x, player.y, player.img:getWidth(), player.img:getHeight()) then
						checkAllCollBullet = true
						player.health = player.health - bullet.damage
						if player.health < 0 then
							playar.health = 0
						end
						player.attacked = true
						player.attackedTimer = 0
						if bullet.speed < 0 then
							player.direction = 'right'
						else
							player.direction = 'left'
						end
						table.remove(bullets, i)
					end
				end
			end
			if checkAllCollBullet == false then
				for k, land in ipairs(lands) do
					if CheckCollision(bullet.x, bullet.y, bullet.img:getWidth(), bullet.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
						table.remove(bullets, i)
					end
				end
			end
		end
		
		for i, player in ipairs(players) do
			if player.isAlive == true then
				-- Fist
				if player.modeRange == false then
					player.canFistTimer = player.canFistTimer - (1 * dt)
					if player.canFistTimer <= 0 then
						player.canFist = true
						player.img = love.graphics.newImage("assets/char".. player.selected .."-" .. player.direction .. ".png")
					end
				end
				
				-- Attacked
				if player.attacked then
					if player.direction == 'right' then
						for j, land in ipairs(lands) do
							if CheckCollisionLeft(player.x, player.y, player.initialWidth, player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
								player.CheckAllCollisionLeft = true
								player.Collide = land
							end
						end
						if player.CheckAllCollisionLeft == false then -- binds us to the map
							player.x = player.x - 20 *dt
						else
							player.x = player.Collide.x + (player.Collide.img:getWidth() + 1)
							player.CheckAllCollisionLeft = false
						end
					else
						for j, land in ipairs(lands) do
							if CheckCollisionRight(player.x, player.y, player.img:getWidth(), player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
								player.CheckAllCollisionRight = true
								player.Collide = land
							end
						end
						if player.CheckAllCollisionRight == false then -- binds us to the map
							player.x = player.x + 20*dt
						else
							player.x = player.Collide.x - (player.img:getWidth() - 1)
							player.CheckAllCollisionRight = false
						end
					end
					player.img = love.graphics.newImage("assets/char".. player.selected .."-attacked-" .. player.direction .. ".png")
					player.attackedTimer = player.attackedTimer + (1 * dt)
					if player.attackedTimer > player.attackedTimerMax then
						player.attacked = false
						player.img = love.graphics.newImage("assets/char".. player.selected .."-" .. player.direction .. ".png")
					end
				end
				
				-- Combo
				player.canComboTimer = player.canComboTimer + (1 * dt)
				
				-- Shoot
				if player.modeRange then
					player.img = love.graphics.newImage('assets/char' .. player.selected .. '-range-' .. player.direction .. '.png')
					player.canShootTimer = player.canShootTimer - (1 * dt)
					if player.canShootTimer <= 0 then
						player.canShoot = true
					end
				end
				
				-- Jump
				player.canJumpTimer = player.canJumpTimer - (1 * dt)
				if player.canJumpTimer > 0.5 then
					player.img = love.graphics.newImage('assets/char' .. player.selected .. '-jump-' .. player.direction .. '.png')
					for j, land in ipairs(lands) do
						if CheckCollisionUp(player.x, player.y, player.img:getWidth(), player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
							player.CheckAllCollisionUp = true
							player.Collide = land
						end
					end
					if player.CheckAllCollisionUp == false then
						for k, playertemp in ipairs(players) do
							if playertemp.isAlive == true then
								if playertemp ~= player then
									if CheckCollisionUp(player.x, player.y, player.img:getWidth(), player.img:getHeight(), playertemp.x, playertemp.y, playertemp.img:getWidth(), playertemp.img:getHeight()) then
										player.CheckAllCollisionUp = true
										player.Collide = playertemp
									end
								end
							end
						end	
					end
					if player.CheckAllCollisionUp == false then
						player.y = player.y - (500*dt)
					else
						player.canJumpTimer = 0.5
						player.y = player.Collide.y + player.Collide.img:getHeight() - 1
						player.CheckAllCollisionUp = false
					end
				elseif player.canJumpTimer <= 0.5 then
					for j, land in ipairs(lands) do
						if CheckCollisionDown(player.x, player.y, player.img:getWidth(), player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
							player.CheckAllCollisionDown = true
							player.Collide = land
						end
					end
					if player.CheckAllCollisionDown == false then
						for k, playertemp in ipairs(players) do
							if playertemp.isAlive == true then
								if playertemp ~= player then
									if CheckCollisionDown(player.x, player.y, player.img:getWidth(), player.img:getHeight(), playertemp.x, playertemp.y, playertemp.img:getWidth(), playertemp.img:getHeight()) then
										player.CheckAllCollisionDown = true
										player.Collide = playertemp
									end
								end
							end
						end
					end
					if player.CheckAllCollisionDown == false then
						player.img = love.graphics.newImage('assets/char' .. player.selected .. "-" .. player.direction .. '.png')
						player.y = player.y + (500*dt)
						player.canJump = false
					else 
						player.canJump = true
						player.y = player.Collide.y - player.img:getHeight() +1
						player.CheckAllCollisionDown = false
					end
				end
				
				-- Change
				if player.canChange == false then
					player.canChangeTimer = player.canChangeTimer - (1 * dt)
					if player.canChangeTimer <= 0 then
						player.canChange = true
					end
				end
			end
		end
		
		-- Controller	
		for i, player in ipairs(players) do
			if player.controller == 1 then
				SetKeyboard(player,lands,bullets,traps,'a','d','w','e','q','r',dt)
			elseif player.controller == 2 then
				SetKeyboard(player,lands,bullets,traps,'left','right','up','end','rshift','/',dt)
			elseif player.controller == 3 then
				SetJoystick(player,lands,bullets,traps,joysticks[1],dt)
			elseif player.controller == 4 then
				SetJoystick(player,lands,bullets,traps,joysticks[2],dt)
			end
		end
		
		-- Game over
		sum = 0
		for i=1,nplayers do
			if players[i].health == 0 then
				sum = sum+1
				players[i].isAlive = false
				players[i].x = 100
				players[i].y = -100
				if players[i].scoreNow == 0 then
					players[i].scoreNow = point
					point = point + 5
				end
			else
				winner = i
			end
		end
		
		if sum > (nplayers - 2) then
			players[winner].scoreNow = players[winner].scoreNow + point
			phase = 6
			selected = 1
			for i=1,nplayers do
				players[i].score = players[i].score + players[i].scoreNow
			end
			temp = nil
			for i=1,nplayers do
				temp = i
				while players[temp].rank ~= -1 do
					temp = temp-1
				end
				for j=1,nplayers do
					if players[temp].score < players[j].score and players[j].rank == -1 then
						temp = j
					end
				end
				players[temp].rank = i
			end
			
			
		end
	elseif phase == 6  then
		
		timerChoose = timerChoose + 1*dt
		if timerChoose > timerMaxChoose then
			if love.keyboard.isDown('right') then
				timerChoose = 0
				selected = selected + 1
				if selected > 2 then
					selected = 1
				end
			elseif love.keyboard.isDown('left') then
				timerChoose = 0
				selected = selected - 1
				if selected < 1 then
					selected = 2
				end
			elseif love.keyboard.isDown('return') then
				timerChoose = 0
				for i, bullet in ipairs(bullets) do
					table.remove(bullets, i)
				end
				for i, trap in ipairs(traps) do
					trap.active = false
				end
				if selected == 1 then
					phase = 5
					point = 5
					winner = -1
					for i=1,nplayers do
						players[i].x = 83+ 1200/nplayers*(i-1) 
						players[i].y = 520
						players[i].health = 100
						players[i].scoreNow = 0
						players[i].canTrap = true
						players[i].rank = -1
						players[i].canFist = true 
						players[i].canFistTimerMax = 0.2 
						players[i].canFistTimer = -1 
						players[i].canJump = true 
						players[i].canJumpTimerMax = 1
						players[i].canJumpTimer = -1 
						players[i].canShoot = true 
						players[i].canShootTimerMax = 0.8 
						players[i].canShootTimer = -1
						players[i].canComboTimer = 1 
						players[i].canComboTimerMax = 1 
						players[i].combo = 0 
						players[i].attacked = false 
						players[i].attackedTimer = -1
						players[i].attackedTimerMax = 0.5
						players[i].isAlive = true
						if players[i].x < 683 then
							players[i].direction = 'right' 
						else
							players[i].direction = 'left'
						end
						players[i].modeRange = false
						players[i].canChange = true
						players[i].canChangeTimer = -1
						players[i].Collide = nil
					end
				elseif selected == 2 then
					for i=1,nplayers do
						players[i].x = 83+ 1200/nplayers*(i-1) 
						players[i].y = 520
						players[i].health = 100
						players[i].scoreNow = 0
						players[i].canTrap = true
						players[i].rank = -1
						players[i].canFist = true 
						players[i].canFistTimerMax = 0.2 
						players[i].canFistTimer = -1 
						players[i].canJump = true 
						players[i].canJumpTimerMax = 1
						players[i].canJumpTimer = -1 
						players[i].canShoot = true 
						players[i].canShootTimerMax = 0.8 
						players[i].canShootTimer = -1
						players[i].canComboTimer = 1 
						players[i].canComboTimerMax = 1 
						players[i].combo = 0 
						players[i].attacked = false 
						players[i].attackedTimer = -1
						players[i].attackedTimerMax = 0.5
						players[i].isAlive = false
						if players[i].x < 683 then
							players[i].direction = 'right' 
						else
							players[i].direction = 'left'
						end
						players[i].modeRange = false
						players[i].canChange = true
						players[i].canChangeTimer = -1
						players[i].Collide = nil
					end
					phase = 1
					selected = 1
					musicfight:stop()
					music:play()
					music:setLooping(true)
				end
			end
		end
	end
end

function love.draw(dt)
	love.graphics.setFont(Font)
	if phase == 1 then
		love.graphics.draw(mainBackgroundImg, 0, 0)
		love.graphics.draw(digitalclashImg, 458, 100)
		love.graphics.setColor(175, 175, 175)
		if selected == 1 then
			love.graphics.setColor(255, 255, 255)
		end
		love.graphics.print("New Game", 635, 400)
		love.graphics.setColor(175, 175, 175)
		if selected == 2 then
			love.graphics.setColor(255, 255, 255)
		end
		love.graphics.print("Exit", 665, 450)
		love.graphics.setColor(255, 255, 255)
	elseif phase == 2 then
		love.graphics.draw(mainBackgroundImg, 0, 0)
		love.graphics.draw(digitalclashImg, 458, 100)
		love.graphics.setColor(175, 175, 175)
		if selected == 1 then
			love.graphics.setColor(255, 255, 255)
		end
		love.graphics.print("2 Players", 635, 400)
		love.graphics.setColor(175, 175, 175)
		if selected == 2 then
			love.graphics.setColor(255, 255, 255)
		end
		love.graphics.print("3 Players", 635, 450)
		love.graphics.setColor(175, 175, 175)
		if selected == 3 then
			love.graphics.setColor(255, 255, 255)
		end
		love.graphics.print("4 Players", 635, 500)
		love.graphics.setColor(175, 175, 175)
		if selected == 4 then
			love.graphics.setColor(255, 255, 255)
		end
		love.graphics.print("Back", 665, 550)
		love.graphics.setColor(255, 255, 255)
	elseif phase == 3 then
		love.graphics.draw(characterBackgroundImg, 0, 0)
		love.graphics.print("PLAYERS " .. counterplayer, 635, 200)
		if selected == 1 then
			love.graphics.draw(controllerImg1, 333, 300)
		elseif selected == 2 then
			love.graphics.draw(controllerImg2, 333, 300)
		elseif selected == 3 then
			love.graphics.draw(controllerImg3, 333, 300)
		elseif selected == 4 then
			love.graphics.draw(controllerImg4, 333, 300)
		end
		love.graphics.setColor(175, 175, 175)
		if selected == 5 then
			love.graphics.setColor(255, 255, 255)
		end
		love.graphics.print("Back", 665, 650)
		love.graphics.setColor(255, 255, 255)
	elseif phase == 4 then
		love.graphics.draw(characterBackgroundImg, 0, 0)
		if counterplayer < 5 then
			pointerPlayer = love.graphics.newImage('assets/player' .. counterplayer .. '-pointer.png')
		end
		if selected == 1 then
			love.graphics.draw(pointerPlayer,443,520)
		end
		love.graphics.draw(iconChar1,453,560)
		if selected == 2 then
			love.graphics.draw(pointerPlayer,563,520)
		end
		love.graphics.draw(iconChar2,573,560)
		if selected == 3 then
			love.graphics.draw(pointerPlayer,683,520)
		end
		love.graphics.draw(iconChar3,693,560)
		if selected == 4 then
			love.graphics.draw(pointerPlayer,803,520)
		end
		love.graphics.draw(iconChar4,813,560)
		love.graphics.setColor(175, 175, 175)
		if selected == 5 then
			love.graphics.setColor(255, 255, 255)
		end
		love.graphics.print("Back", 665, 690)
		love.graphics.setColor(255, 255, 255)
		if selected ~= 5 then
			showChar = love.graphics.newImage('assets/char' .. selected .. '-show.png')
			love.graphics.draw(showChar,483,50)
		end
	elseif phase == 5 then
		love.graphics.draw(backgroundImg, 0,0)
		for i=1,nplayers do
			love.graphics.draw(players[i].iconImg, 20+((1366/nplayers)*(i-1)), 675)
			love.graphics.draw(healthbar, 120+((1366/nplayers)*(i-1)), 695)
			if players[i].selected == 1 then
				love.graphics.setColor(235, 0, 0)
			elseif players[i].selected == 2 then
				love.graphics.setColor(12, 179, 212)
			elseif players[i].selected == 3 then
				love.graphics.setColor(255, 255, 255)
			elseif players[i].selected == 4 then
				love.graphics.setColor(62, 250, 62	)
			end
			love.graphics.rectangle("fill", 124+((1366/nplayers)*(i-1)), 699 , 192*players[i].health/100, 52 )
			love.graphics.setColor(255, 255, 255)
		end
		for i, player in ipairs(players) do
			if player.isAlive == true then
				love.graphics.draw(player.img, player.x, player.y)
			end
		end
		
		for i, land in ipairs(lands) do
			love.graphics.draw(land.img, land.x, land.y)
		end
		
		for i, bullet in ipairs(bullets) do
			love.graphics.draw(bullet.img, bullet.x, bullet.y)
		end
		
		for i, obstacle in ipairs(obstacles) do
			if obstacle.CheckRandom then
				obstacle.x = love.math.random( 83, 1283-(obstacleImg:getWidth()/7) )
				obstacle.y = love.math.random( 75, 600-obstacleImg:getHeight() )
				obstacle.CheckRandom = false
			end
			if obstacle.timerAppear > obstacle.timerAppearRandom then
				if obstacle.timerDraw < 7 then
					love.graphics.draw(obstacle.img, obstacle.quads[(math.floor(obstacle.timerDraw) % 7) + 1], obstacle.x, obstacle.y )
				else
					obstacle.CheckRandom = true
					obstacle.timerDraw = 0
				end
			end
		end
	elseif phase == 6 then
		love.graphics.draw(characterBackgroundImg, 0, 0)
		love.graphics.draw(matchResultImg, 183, 100)
		love.graphics.draw(matchResult2Img, 183, 500)
		love.graphics.draw(bottomMatchResultImg, 183, 618)
		for i=1,nplayers do
			love.graphics.print(i, 370, 170 + (50*i))
			j = 1
			found = false
			while j<=nplayers and found == false do
				if players[j].rank == i then
					love.graphics.print("Player " .. j, 640, 170 + (50*i))
					found = true
				else
					j = j+1
				end
			end
			love.graphics.print(players[j].score, 990, 170 + (50*i))
		end	
		love.graphics.setColor(175, 175, 175)
		if selected == 1 then
			love.graphics.setColor(255, 255, 255)
		end
		love.graphics.print("Continue", 300, 724)
		love.graphics.setColor(175, 175, 175)
		if selected == 2 then
			love.graphics.setColor(255, 255, 255)
		end
		love.graphics.print("End game", 900, 724)
		love.graphics.setColor(255, 255, 255)
	end
end
