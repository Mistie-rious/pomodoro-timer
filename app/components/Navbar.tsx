"use client"

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, TextInput, NativeSelect, MantineProvider, createTheme, Input } from "@mantine/core";
import { useTimerContext } from "../context/TimerContext";
import { useTheme } from '../context/ThemeContext';

import { useContext, useEffect, useState } from "react";
function Navbar() {


  const [opened, { open, close }] = useDisclosure(false);
  const {
    customTime,
    shortBreak,
    longBreak,
    setCustomTime,
    setShortBreak,
    setLongBreak,
  } = useTimerContext();

 

  const { theme, setTheme } = useTheme();


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    close();
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.currentTarget.value);
  };




  useEffect(() => {
    console.log("Theme changed to:", theme);
  }, [theme]);


  
  return (
    <>
      <div className="flex  text-white  justify-between items-center">
        <div className="font-bold" >Mistie's Pomo</div>
        <Modal
          styles={{
            body: { backgroundColor: '#333' }, // Dark gray
            header: { backgroundColor: '#333' },
            title: { color: 'white' },
          }}
          opened={opened}
          onClose={close}
          centered
          title="Customize Timers"
        >
          <div className="flex flex-col space-y-3">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <Input.Wrapper label="Pomodoro Time" className="text-white" size="xs">
                  <Input
                  styles={{
                    input: { backgroundColor: '#555555', color: "white" },
                 }}
                    value={customTime !== null ? customTime : ""}
                    onChange={(event) => {
                      const value = event.currentTarget.value
                        ? Number(event.currentTarget.value)
                        : null;
                      setCustomTime(value !== null ? value : 0);
                    }}
                    placeholder="Enter time in minutes"
                  />
                </Input.Wrapper>

                <Input.Wrapper label="Short Break" className="text-white" size="xs">
  <Input
  styles={{
    input: { backgroundColor: '#555555', color: "white" },
 }}
    value={shortBreak !== null ? shortBreak : ""}
    onChange={(event) =>
      setShortBreak(
        event.currentTarget.value
          ? Number(event.currentTarget.value)
          : 0
      )
    }
    placeholder="Enter short break in minutes"
    type="number"
  />
</Input.Wrapper>

<Input.Wrapper  className="text-white" label="Long Break" size="xs">
  <Input
  styles={{
    input: { backgroundColor: '#555555', color: "white" },
 }}
    value={longBreak !== null ? longBreak : ""}
    onChange={(event) =>
      setLongBreak(
        event.currentTarget.value
          ? Number(event.currentTarget.value)
          : 0
      )
    }
    placeholder="Enter long break in minutes"
    type="number"
  />
</Input.Wrapper>

<NativeSelect
styles={
  {
    input: { backgroundColor: '#555555', color: "white" }, // Dark gray
    label: {color: "white"} // Dark gray
  }
}
      mt="md"
      label="Select Theme"
      data={['Spooky', 'Chill', 'Mystic', 'Charlotte', 'Sunset', 'Car', 'Books']}
      value={theme}
      className="text-white"
      onChange={handleThemeChange}

    />
              </div>

              <Button
              styles={
                {
                  root: { backgroundColor: 'white', color: 'black' }, // Dark gray

                }
              }
                type="submit"
                variant="filled"
                color="rgba(105, 116, 152, 1)"
                radius="lg"
              >
                Proceed
              </Button>
            </form>
          </div>
        </Modal>

        <Button
          onClick={open}
          variant="outline"
          color="rgba(255, 255, 255, 1)"
          size="xs"
          radius="lg"
        >
          Settings
        </Button>
      </div>
    </>
  );
}

export default Navbar;
