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
  const [selectedTheme, setSelectedTheme] = useState(theme);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setTheme(selectedTheme);
    close();
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTheme(event.target.value);
  };




  useEffect(() => {
    console.log("Theme changed to:", theme);
  }, [theme]);


  
  return (
    <>
      <div className="flex  text-white  justify-between items-center">
        <div className="font-bold" >Mistie's Pomo</div>
        <Modal
          opened={opened}
          onClose={close}
          centered
          title="Customize Timers"
        >
          <div className="flex flex-col space-y-3">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <Input.Wrapper label="Pomodoro Time" size="xs">
                  <Input
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

                <Input.Wrapper label="Short Break" size="xs">
  <Input
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

<Input.Wrapper label="Long Break" size="xs">
  <Input
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
      mt="md"
      label="Select Theme"
      data={['Spooky', 'Chill', 'Rainy', 'Arcane']}
      value={selectedTheme}
      onChange={handleThemeChange}

    />
              </div>

              <Button
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
