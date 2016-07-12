-- Collision detection 
function CheckCollisionDown(x1,y1,w1,h1, x2,y2,w2,h2)
	return x1+w1 > x2 and x1 < x2+w2 and y1+h1 > y2 and y1+h1 < y2+20
end

function CheckCollisionUp(x1,y1,w1,h1, x2,y2,w2,h2)
	return x1+w1 > x2 and x1 < x2+w2 and y1 < y2+h2 and  y1 > y2+h2-20
end

function CheckCollisionLeft(x1,y1,w1,h1, x2,y2,w2,h2)
	return ((y1 > y2 and y1 < y2+h2) or (y1+h1 > y2+21 and y1+h1 < y2+h2)) and x1 < x2+w2 and x1 > x2+w2-20
end

function CheckCollisionRight(x1,y1,w1,h1, x2,y2,w2,h2)
	return ((y1 > y2 and y1 < y2+h2) or (y1+h1 > y2+21 and y1+h1 < y2+h2)) and x1+w1 < x2+20 and x1+w1 > x2
end

function CheckCollision(x1,y1,w1,h1, x2,y2,w2,h2)
	return 	x1 < x2+w2 and
			x2 < x1+w1 and
			y1 < y2+h2 and
			y2 < y1+h1
end

function CheckFist(x1,y1,w1,h1, x2,y2,w2,h2)
	return ((y1 < y2+h2 and  y1 > y2) or (y1+h1 > y2 and y1+h1 < y2+h2)) and ((x1 < x2+w2 and x1 > x2) or (x1+w1 > x2 and x1+w1 < x2+w2))
end

function SetKeyboard(player,lands,bullets,traps,a,d,w,e,q,r,dt)
	if love.keyboard.isDown(a) and player.attacked == false then
		player.direction = 'left'
		for j, land in ipairs(lands) do
			if CheckCollisionLeft(player.x, player.y, player.img:getWidth(), player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
				player.CheckAllCollisionLeft = true
				Collide = land
			end
		end
		if player.CheckAllCollisionLeft == false then
			for i, playertemp in ipairs(players) do
				if playertemp ~= player then
					if CheckCollisionLeft(player.x, player.y, player.img:getWidth(), player.img:getHeight(), playertemp.x, playertemp.y, playertemp.img:getWidth(), playertemp.img:getHeight()) then
						player.CheckAllCollisionLeft = true
						Collide = playertemp
					end
				end
			end	
		end
		if player.CheckAllCollisionLeft == false then -- binds us to the map
			player.x = player.x - (player.speed*dt)
		else
			player.CheckAllCollisionLeft = false
			player.x = Collide.x + Collide.img:getWidth() - 1
		end
		
	elseif love.keyboard.isDown(d) and player.attacked == false then
		player.direction = 'right'
		for j, land in ipairs(lands) do
			if CheckCollisionRight(player.x, player.y, player.initialWidth, player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
				player.CheckAllCollisionRight = true
				Collide = land
			end
		end
		if player.CheckAllCollisionRight == false then
			for i, playertemp in ipairs(players) do
				if playertemp ~= player then
					if CheckCollisionRight(player.x, player.y, player.img:getWidth(), player.img:getHeight(), playertemp.x, playertemp.y, playertemp.img:getWidth(), playertemp.img:getHeight()) then
						player.CheckAllCollisionRight = true
						Collide = playertemp
					end
				end
			end	
		end
		if player.CheckAllCollisionRight == false then -- binds us to the map
			player.x = player.x + (player.speed*dt)
		else
			player.CheckAllCollisionRight = false
			player.x = Collide.x - player.img:getWidth() +1
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
				bullet = { img = love.graphics.newImage('assets/char' .. player.selected .. '-bullet-' .. player.direction .. '.png'), x = player.x+player.img:getWidth(), y = player.y+player.img:getHeight()/2, speed = player.bulletSpeed, damage = player.bulletDamage }
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
	
	if love.keyboard.isDown(q) and player.canTrap then
		player.img = love.graphics.newImage('assets/char' .. player.selected .. '-fist1-' .. player.direction .. '.png')
		player.canTrap = false
		trap = { x = player.x, y = player.y, width = 100, height = 100, timer = 0, active = false }
		table.insert(traps,trap)
	end
	
	if love.keyboard.isDown(r) then
		if player.modeRange == false then
			player.modeRange = true
		else
			player.modeRange = false
		end
	end
end

debug = true

function love.load(arg)
	-- Main menu
	mainBackgroundImg = love.graphics.newImage('assets/main-background.jpg')
	
	-- Character
	iconChar1 = love.graphics.newImage('assets/iconChar1.png')
	iconChar2 = love.graphics.newImage('assets/iconChar2.png')
	iconChar3 = love.graphics.newImage('assets/iconChar3.png')
	iconChar4 = love.graphics.newImage('assets/iconChar4.png')
	
	-- Land
	lands = {} 
    backgroundImg = love.graphics.newImage('assets/background.png')
    
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
	
	-- Player
	players = {}
    
	-- Obstacle
	obstacles = {}
	for i=1,3 do
		obstacleImg = love.graphics.newImage('assets/sprite-obstacle.png')
		tempframe = 17
		obstacle = { frame = tempframe, x=love.math.random( 380, 900-(obstacleImg:getWidth()/tempframe) ), y=love.math.random( 100, 620-obstacleImg:getHeight() ), 
					quads = {}, timerDraw = 0, timerObstacleCollision = 0, timerAppear = 0, timerAppearRandom = love.math.random( 0, 10 ), img = obstacleImg, CheckRandom = true }
		
		for i=0,16 do
			table.insert(obstacle.quads, love.graphics.newQuad(i * obstacle.img:getWidth()/obstacle.frame, 0, obstacle.img:getWidth()/obstacle.frame, obstacle.img:getHeight(), obstacle.img:getWidth(), obstacle.img:getHeight()))
		end
		table.insert(obstacles,obstacle)
	end
	
	-- Trap
	traps = {}
	
	-- Bullet
	bullets = {}
	
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
	if phase == 1 then
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
				if selected > 3 then
					selected = 1
				end
			elseif love.keyboard.isDown('up') then
				timerChoose = 0
				selected = selected - 1
				if selected < 1 then
					selected = 3
				end
			elseif love.keyboard.isDown('return') then
				timerChoose = 0
				nplayers = selected+1
				phase = 3
				selected = 1
				counterplayer = 1
			end
		end
	elseif phase == 3 then
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
				elseif love.keyboard.isDown('return') then
					player = { x = 400*counterplayer, y = 500, speed = 150, img = nil, health = 100, initialWidth = 0, initialHeight = 0, 
							canFist = true, canFistTimerMax = 0.2, canFistTimer = -1, canJump = true, canJumpTimerMax = 1, canJumpTimer = -1, canTrap = true,
							CheckAllCollisionDown = false, CheckAllCollisionUp = false, CheckAllCollisionLeft = false, CheckAllCollisionRight = false,
							canShoot = true, canShootTimerMax = 0.8, canShootTimer = -1, bulletSpeed = 300, bulletDamage = 10,
							canComboTimer = 1, canComboTimerMax = 1, combo = 0, attacked = false, attackedTimer = -1, attackedTimerMax = 0.5, 
							score = 0, scoreNow = 0, selected = nil, rank = -1, direction = 'left', modeRange = false }
					timerChoose = 0
					player.selected = selected
					player.img = love.graphics.newImage("assets/char".. player.selected .."-" .. player.direction .. ".png")
					player.initialWidth = player.img:getWidth()
					player.initialHeight = player.img:getHeight()
					counterplayer = counterplayer + 1
					table.insert(players,player)
				end
			end
		else
			phase = 4
			point = 5
			winner = -1
		end
	elseif phase == 4 then
		-- Obstacle
		for i, obstacle in ipairs (obstacles) do
			obstacle.timerAppear = obstacle.timerAppear + dt * 1
			
			if obstacle.timerAppear > obstacle.timerAppearRandom then
				obstacle.timerDraw = obstacle.timerDraw + dt * 5
				obstacle.timerObstacleCollision = obstacle.timerObstacleCollision + (dt * 1)
				if obstacle.timerObstacleCollision/1 > 1 then
					for j, player in ipairs (players) do
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
		
		-- Trap
		for i, trap in ipairs(traps) do
			if trap.timer>4 then
				trap.active = true
			else
				trap.timer = trap.timer + 1*dt
			end
			if trap.active then
				for j, player in ipairs (players) do
					if CheckCollision(player.x, player.y, player.img:getWidth(), player.img:getHeight(), trap.x, trap.y, trap.width, trap.height) then
						player.health = player.health - 100
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
						table.remove(traps, i)
					end
				end
			end
		end
		
		-- Bullet
		for i, bullet in ipairs(bullets) do
			bullet.x = bullet.x + bullet.speed * dt
			for j, player in ipairs(players) do
				if CheckCollision(bullet.x, bullet.y, bullet.img:getWidth(), bullet.img:getHeight(), player.x, player.y, player.img:getWidth(), player.img:getHeight()) then
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
			if bullet.x > 1500 then
				table.remove(bullets, i)
			end
		end
		
		-- Fist
		for i, player in ipairs(players) do
			if player.modeRange == false then
				player.canFistTimer = player.canFistTimer - (1 * dt)
				if player.canFistTimer <= 0 then
					player.canFist = true
					player.img = love.graphics.newImage("assets/char".. player.selected .."-" .. player.direction .. ".png")
				end
			end
		end
		
		-- Attacked
		for i, player in ipairs(players) do
			if player.attacked then
				if player.direction == 'right' then
					for j, land in ipairs(lands) do
						if CheckCollisionRight(player.x, player.y, player.initialWidth, player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
							player.CheckAllCollisionRight = true
							Collide = land
						end
					end
					if player.CheckAllCollisionRight == false then
						for i, playertemp in ipairs(players) do
							if playertemp ~= player then
								if CheckCollisionRight(player.x, player.y, player.img:getWidth(), player.img:getHeight(), playertemp.x, playertemp.y, playertemp.img:getWidth(), playertemp.img:getHeight()) then
									player.CheckAllCollisionRight = true
									Collide = playertemp
								end
							end
						end	
					end
					if player.CheckAllCollisionRight == false then -- binds us to the map
						player.x = player.x - 20 *dt
					else
						player.CheckAllCollisionRight = false
						player.x = Collide.x - (player.img:getWidth() +1) * dt
					end
				else
					for j, land in ipairs(lands) do
						if CheckCollisionLeft(player.x, player.y, player.img:getWidth(), player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
							player.CheckAllCollisionLeft = true
							Collide = land
						end
					end
					if player.CheckAllCollisionLeft == false then
						for k, playertemp in ipairs(players) do
							if playertemp ~= player then
								if CheckCollisionLeft(player.x, player.y, player.img:getWidth(), player.img:getHeight(), playertemp.x, playertemp.y, playertemp.img:getWidth(), playertemp.img:getHeight()) then
									player.CheckAllCollisionLeft = true
									Collide = playertemp
								end
							end
						end	
					end
					if player.CheckAllCollisionLeft == false then -- binds us to the map
						player.x = player.x + 20*dt
					else
						player.CheckAllCollisionLeft = false
						player.x = Collide.x + (Collide.img:getWidth() - 1)*dt
					end
				end
				player.img = love.graphics.newImage("assets/char".. player.selected .."-attacked-" .. player.direction .. ".png")
				player.attackedTimer = player.attackedTimer + (1 * dt)
				if player.attackedTimer > player.attackedTimerMax then
					player.attacked = false
					player.img = love.graphics.newImage("assets/char".. player.selected .."-" .. player.direction .. ".png")
				end
			end
		end
		
		-- Combo
		for i, player in ipairs(players) do
			player.canComboTimer = player.canComboTimer + (1 * dt)
		end
		
		-- Shoot
		for i, player in ipairs(players) do
			if player.modeRange then
				player.img = love.graphics.newImage('assets/char' .. player.selected .. '-range-' .. player.direction .. '.png')
				player.canShootTimer = player.canShootTimer - (1 * dt)
				if player.canShootTimer <= 0 then
					player.canShoot = true
				end
			end
		end
		
		-- Jump
		for i, player in ipairs (players) do
			player.canJumpTimer = player.canJumpTimer - (1 * dt)
			Collide = nil
			if player.canJumpTimer > 0.5 then
				for j, land in ipairs(lands) do
					if CheckCollisionUp(player.x, player.y, player.img:getWidth(), player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
						player.CheckAllCollisionUp = true
						Collide = land
					end
				end
				if player.CheckAllCollisionUp == false then
					for k, playertemp in ipairs(players) do
						if playertemp ~= player then
							if CheckCollisionUp(player.x, player.y, player.img:getWidth(), player.img:getHeight(), playertemp.x, playertemp.y, playertemp.img:getWidth(), playertemp.img:getHeight()) then
								player.CheckAllCollisionUp = true
								Collide = playertemp
							end
						end
					end	
				end
				if player.CheckAllCollisionUp == false then
					player.y = player.y - (500*dt)
				else
					player.canJumpTimer = 0.5
					player.y = Collide.y + Collide.img:getHeight() - 1
					player.CheckAllCollisionUp = false
				end
			elseif player.canJumpTimer <= 0.5 then
				for j, land in ipairs(lands) do
					if CheckCollisionDown(player.x, player.y, player.img:getWidth(), player.img:getHeight(), land.x, land.y, land.img:getWidth(), land.img:getHeight()) then
						player.CheckAllCollisionDown = true
						Collide = land
					end
				end
				if player.CheckAllCollisionDown == false then
					for k, playertemp in ipairs(players) do
						if playertemp ~= player then
							if CheckCollisionDown(player.x, player.y, player.img:getWidth(), player.img:getHeight(), playertemp.x, playertemp.y, playertemp.img:getWidth(), playertemp.img:getHeight()) then
								player.CheckAllCollisionDown = true
								Collide = playertemp
							end
						end
					end
				end
				if player.CheckAllCollisionDown == false then
					player.y = player.y + (500*dt)
					player.canJump = false
				else 
					player.canJump = true
					player.y = Collide.y - player.img:getHeight() +1
					player.CheckAllCollisionDown = false
				end
			end
		end
		
		-- Keyboard
		if love.keyboard.isDown('escape') then
			love.event.push('quit')
		end
		
		SetKeyboard(players[1],lands,bullets,traps,'a','d','w','e','q','r',dt)
		SetKeyboard(players[2],lands,bullets,traps,'left','right','up','end','rshift','/',dt)
		
		-- Game over
		sum = 0
		for i=1,nplayers do
			if players[i].health == 0 then
				sum = sum+1
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
			phase = 5
			selected = 1
			for i=1,nplayers do
				players[i].score = players[i].score + players[i].scoreNow
			end
			temp = nil
			for i=1,nplayers-1 do
				temp = i
				while players[temp].rank ~= -1 do
					temp = temp-1
				end
				for j=1,nplayers do
					if players[temp].score < players[j].score and players[j].rank ~= i-1 then
						temp = j
					end
				end
				players[temp].rank = i
			end
			
			for i=1,nplayers do
				if players[i].rank == -1 then
					players[i].rank = nplayers
				end
			end
		end
	elseif phase == 5  then
		
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
				if selected == 1 then
					phase = 4
					point = 5
					winner = -1
					for i=1,nplayers do
						players[i].health = 100
						players[i].scoreNow = 0
						players[i].rank = -1
					end
				elseif selected == 2 then
					phase = 1
					selected = 1
				end
			end
		end
	end
end

function love.draw(dt)
	if phase == 1 then
		love.graphics.draw(mainBackgroundImg, 0, 0)
		if selected == 1 then
			love.graphics.setColor(255, 0, 0)
		end
		love.graphics.print("New Game", 600, 300)
		love.graphics.setColor(255, 255, 255)
		if selected == 2 then
			love.graphics.setColor(255, 0, 0)
		end
		love.graphics.print("Exit", 600, 400)
		love.graphics.setColor(255, 255, 255)
	elseif phase == 2 then
		if selected == 1 then
			love.graphics.setColor(255, 0, 0)
		end
		love.graphics.print("2 Players", 600, 300)
		love.graphics.setColor(255, 255, 255)
		if selected == 2 then
			love.graphics.setColor(255, 0, 0)
		end
		love.graphics.print("3 Players", 600, 350)
		love.graphics.setColor(255, 255, 255)
		if selected == 3 then
			love.graphics.setColor(255, 0, 0)
		end
		love.graphics.print("4 Players", 600, 400)
		love.graphics.setColor(255, 255, 255)
	elseif phase == 3 then
		if selected == 1 then
			love.graphics.setColor(255, 0, 0)
		end
		love.graphics.draw(iconChar1,100,300)
		love.graphics.setColor(255, 255, 255)
		if selected == 2 then
			love.graphics.setColor(255, 0, 0)
		end
		love.graphics.draw(iconChar2,350,300)
		love.graphics.setColor(255, 255, 255)
		if selected == 3 then
			love.graphics.setColor(255, 0, 0)
		end
		love.graphics.draw(iconChar3,600,300)
		love.graphics.setColor(255, 255, 255)
		if selected == 4 then
			love.graphics.setColor(255, 0, 0)
		end
		love.graphics.draw(iconChar4,850,300)
		love.graphics.setColor(255, 255, 255)
	elseif phase == 4 then
		love.graphics.draw(backgroundImg, 280,0)
		love.graphics.rectangle("fill", 20, 50, 200, 20 )
		love.graphics.rectangle("fill", 20, 150, 200, 20 )
		love.graphics.setColor(255, 0, 0)
		love.graphics.rectangle("fill", 20, 50, 200*players[1].health/100, 20 )
		love.graphics.rectangle("fill", 20, 150, 200*players[2].health/100, 20 )
		love.graphics.setColor(255, 255, 255)
		for i, player in ipairs(players) do
			if player.health > 0 then
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
				obstacle.x = love.math.random( 380, 900-(obstacleImg:getWidth()/17) )
				obstacle.y = love.math.random( 100, 620-obstacleImg:getHeight() )
				obstacle.CheckRandom = false
			end
			if obstacle.timerAppear > obstacle.timerAppearRandom then
				if obstacle.timerDraw < 17 then
					love.graphics.draw(obstacle.img, obstacle.quads[(math.floor(obstacle.timerDraw) % 17) + 1], obstacle.x, obstacle.y )
				else
					obstacle.CheckRandom = true
					obstacle.timerDraw = 0
				end
			end
		end
	elseif phase == 5 then
		love.graphics.print("Rank", 300, 200)
		love.graphics.print("Name", 500, 200)
		love.graphics.print("Score", 700, 200)
		for i=1,nplayers do
			love.graphics.print(i, 300, 200 + (100*i))
			j = 1
			found = false
			while j<=nplayers and found == false do
				if players[j].rank == i then
					love.graphics.print("Player " .. j, 500, 200 + (100*i))
					found = true
				else
					j = j+1
				end
			end
			love.graphics.print(players[j].score, 700, 200 + (100*i))
		end	
		if selected == 1 then
			love.graphics.setColor(255, 0, 0)
		end
		love.graphics.print("Continue", 400, 700)
		love.graphics.setColor(255, 255, 255)
		if selected == 2 then
			love.graphics.setColor(255, 0, 0)
		end
		love.graphics.print("End game", 800, 700)
		love.graphics.setColor(255, 255, 255)
	end
end
