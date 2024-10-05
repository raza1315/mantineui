import React from 'react'
import { MantineProvider } from '@mantine/core';
import { Button } from '@mantine/core';
import { Text, Avatar, Group } from '@mantine/core';
function page() {
  return (
    <MantineProvider>
      <div className="h-screen w-full flex justify-center items-center ">
        <Button variant="default" color="blue" size="md">
          Hello Mantine
        </Button>
      </div>
      <div>
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
          alt="Jacob Warnhalter"
          radius="xl"
        />
        <div>
          <Text size="sm">Jacob Warnhalter</Text>
          <Text size="xs" c="dimmed">
            10 minutes ago
          </Text>
        </div>
      </Group>
      <Text pl={54} pt="sm" size="sm">
        This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa
        concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has
        water spouts that protrude from its shell. The water spouts are very accurate.
      </Text>
    </div>
    </MantineProvider>
  )
}

export default page