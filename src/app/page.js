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
    </MantineProvider>
    
  )
}

export default page