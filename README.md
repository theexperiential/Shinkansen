# Shinkansen

(In Development)

Shinkansen is a collaborative state machine for TouchDesigner written in React. It enables rapid creation, iteration and performance of complex choreographies for just about any real-time software project. Shinkansen is inspired by the Japanense "new main line" bullet trains, renowned for their speed, reliability, and performance.

## Exhibits
Shinkansen contains one or many exhibitions. Each exhibit acts as a self-contained project workspace.

## States
Within each Shinkansen exhibit is at least one state. Think of states as scenes in a theatrical production, songs on an album or pieces of art in a gallery. States are situated in horizontal tabs along the top of the interface. Each state contains a multi-layer timeline with cues.

## Layers 
Each layer acts as an instrument in an orchestra. It can manipulate various parameters of operators on the media server, such as a lighting fixture's rotation and color, a sound file's volume, a display's background video content and transparency, a dynamic text block's position and opacity, cutting between IMAG input feeds, and more. Shinkansen has five layer types: trigger, animation, color, audio and video. Layers are vertically stacked as rows in the timeline panel.

### Trigger Layer
A trigger layer is a set of (a) repeatable channel animation(s). By default a trigger only contains a single step animation (0 to 1, for example) for a single frame, but can be made longer if desired. It is useful for beat-based actions, such as a graphic that scales from 0% to 100% and back to 0% for each snare in a song. Once a trigger animation is created, it can be replicated by alt-dragging it within the layer, or with a defined keyboard shortcut. Trigger replicants can also be made unique so that they become their own replicant and no longer retain the attributes of the main replicant. Each channel's output is linked to any TouchDesigner parameter that accepts a float value (tx, ty, tz, etc.).

### Animation Layer
Animations can contain any number of channels that control attributes of TouchDesigner elements. Each channel's output is linked to any TouchDesigner parameter that accepts a float value (tx, ty, tz, etc.).

### Color Layer
A color layer contains exactly 4 normalized channels (R, G, B and A) that define a particular color over time. It's output is linked to any set of TouchDesigner color parameters (RGB or RGBA).

### Audio Layer
An audio layer contains at least one audio file that is played over time. Multiple files can be stringed together as an editorial. This layer's input is linked to a TouchDesigner folderDAT (to select the audio file), and it's output is linked to an audiofileinCHOP.

### Video Layer
A video layer contains at least one video file that is played over time. Multiple files can be stringed together as an editorial. This layer's input is linked to a TouchDesigner folderDAT (to select the video file), and it's output is linked to a moviefileinTOP.

## Timegraph
Channel(s) of the selected layer are displayed in the curves editor ("timegraph") panel. Each channel defines a particular attribute, such as alpha, x transform, y rotation, scale, etc. Channels can be added and removed from this panel.

## Keyframes
Channel keyframes may be added and edited using various interpolation methods (step, linear and bezier). Each channel's value over time is relayed to it's corresponding TouchDesigner attributes (usually parameters) in real-time.

## Cues
Cues receive inputs from TouchDesigner (or any OSC network device) that instruct Shinkansen to perform playback actions such as playing and pausing, entering and exiting loops, and even triggering and recording animations.

## Properties
A properties panel allows for detailed refinement of all selected attributes for each stack: state, layer, channel and/or keyframe.


# Installation

# Usage

# Support
