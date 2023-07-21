import StepIcon from '../components/StepIcon/StepIcon.jsx';

export default {
  title: 'Components/StepIcon',
  component: StepIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const Current = {
    args: {
        name:"Datos Personales",
        status: "current",
        icon:"fa-solid fa-user"
    },
  };
export const Complete = {
args: {
    name:"Datos Personales",
    status: "complete",
    icon:"fa-solid fa-user"
},
};

export const Pending = {
args: {
    name:"Datos Personales",
    status: "",
    icon:"fa-solid fa-user"
},
};