# 🔥 세상에 없던 AI 집중력 타이머 - FocuStudy🔥

> Focus Management Platform with AI and WebRTC 

![https://user-images.githubusercontent.com/46708207/91129625-4b183b80-e6e5-11ea-98c6-49f7ff8c1555.png](https://user-images.githubusercontent.com/46708207/91129625-4b183b80-e6e5-11ea-98c6-49f7ff8c1555.png)

코로나-19의 확산으로 인해 집에서 공부나 업무를 하는 사람이 많아진 상황인 지금, 집에서는 집중하기가 어렵다는 문제가 제기되고 있다.(설문결과) 이 문제를 해결하고자 집중력을 향상시키는 서비시를 제공하려고 한다. 기존에 존재하던 집중력 관리 서비스들은 그저 타이머의 변형에 불과했다. 자기 관리에 도움이 될 수는 있지만 직접적으로 집중력을 향상하는 데에는 한계가 있었다. 본 프로젝트는 효율적인 시간 활용을 위한 뽀모도로 타이머는 물론, 모션인식을 통해 집중력의 정도를 측정 및 관리해주며, 스트리밍 기능으로 다른 사용자들과 같이 공부할 수 있는 기능을 제공한다.

![https://user-images.githubusercontent.com/46708207/98787131-6ff99080-2442-11eb-8acc-4c9f44d4975c.gif](https://user-images.githubusercontent.com/46708207/98787131-6ff99080-2442-11eb-8acc-4c9f44d4975c.gif)

## **✔️ 팀 구성**

### **🧑🏻‍💻 팽진희 : 팀장, 기획 및 관리, iOS 개발**

### **🧑🏻‍💻 이승현 : 웹캠기반 영상인식 솔루션, 알고리즘 개발**

### **🧑🏻‍💻 구치훈 : WebRTC기반 스트리밍 및 전반적인 웹 인프라 구축**

## **✔️ 시스템 구성도**

![https://user-images.githubusercontent.com/46708207/98784197-1c854380-243e-11eb-88fd-4992d4c3cd2e.png](https://user-images.githubusercontent.com/46708207/98784197-1c854380-243e-11eb-88fd-4992d4c3cd2e.png)

## **✔️ 개발환경**
![스크린샷 2021-01-27 오전 4 19 55](https://user-images.githubusercontent.com/46708207/105893853-f2174f80-6056-11eb-8262-45fa8dbb0a17.png)


## **✔️ 주요 인공지능 알고리즘 MediaPipe - Face Mesh**

![https://user-images.githubusercontent.com/46708207/98902908-e9a08580-24f9-11eb-8ad7-303effd3e1ce.gif](https://user-images.githubusercontent.com/46708207/98902908-e9a08580-24f9-11eb-8ad7-303effd3e1ce.gif)

## **✔️ 웹 아키텍처**

![https://user-images.githubusercontent.com/46708207/98784849-0deb5c00-243f-11eb-9d48-0769106d1943.png](https://user-images.githubusercontent.com/46708207/98784849-0deb5c00-243f-11eb-9d48-0769106d1943.png)

## **✔️ 적용 기술/환경**

서버 : Ubuntu 18.04(EC2 t2.medium, t2.large)

도구 : Tensorflow, TensorflowJS, React/NodeJS, RemonSDK, coreML, AWS, Docker, mongoDB

언어 : Python, C++, Javascript, Swift

관리 : Github, GitLab, Jenkins, Notion, Slack, Kakao

## ✔️ 주요 기술

### **🔴 사용자 관리 및 보상**

사용자 계정 개설기능을 제공하여, 모바일, 웹에 상관없이 자신의 기록을 열람가능하게 한다. 기록되는 정보는 Single, Multi 모드에서 산출된 집중력 점수를 바탕으로 한 점수이다. 집중력 점수를 합산하여 기록을 정산하고 이를 랭킹 시스템에 반영하여 다른 사람들의 기록과 비교를 가능하게 한다. 이를 통해 사람들은 자극을 받아 건강한 경쟁을 할 수 있도록 도와준다.

![https://user-images.githubusercontent.com/46708207/98847537-bfb47800-2493-11eb-960a-18373644e2ac.png](https://user-images.githubusercontent.com/46708207/98847537-bfb47800-2493-11eb-960a-18373644e2ac.png)

### **🔴 집중력 점수 기반 시각화**

세션이 진행동안 측정한 집중도를 시각화된 그래프로 제공한다. 측정한 집중도를 분류하여 어느 시간대에 내가 왜 이 점수인지 사용자에게 알려준다. 또한 해당 점수를 데이터 베이스에 관리하면서 랭킹 시스템의 지표로써 함께 활용한다.

![https://user-images.githubusercontent.com/46708207/98847449-9e538c00-2493-11eb-9cd1-998bd5f9f0ab.png](https://user-images.githubusercontent.com/46708207/98847449-9e538c00-2493-11eb-9cd1-998bd5f9f0ab.png)

### **🔴 WebRTC을 활용한 회상회의 기능 제공**

본 프로젝트에서는 혼자 진행할 수 있는 Single모드와 여러명이서 함께 할 수 있는 Mult모드를 지원한다. Multi 모드에서 실시간 화상회의 서비스를 제공한다. 화상회의 방에서 서로 경쟁하며 집중력 상승의 효과를 노린다. 사용자들은 컴퓨터 혹은 모바일 캠으로 본인의 모습을 송출하고, 다른 사람들이 공부하는 영상을 실시간으로 볼 수 있다. 사용자간에 Peer to Peer 통신을 위해 WebRTC 기술을 사용한다. 그리고 지연율을 낮추고 고품질 영상을 송수신하기 위하여 RemoteMonster SDK를 함께 사용한다.

![https://user-images.githubusercontent.com/46708207/98790339-e8fae700-2446-11eb-8121-9c74ce88c9c8.png](https://user-images.githubusercontent.com/46708207/98790339-e8fae700-2446-11eb-8121-9c74ce88c9c8.png)

### 🔴 웹캠 영상 인식을 활용한 집중력 탐지

3D Face Mesh알고리즘으로 웹캠으로부터 프레임별 얼굴의 좌표를 인식한 후에 해당 프레인간 좌표의 변화율을 측정하여 집중력을 측정한다. 측정한 집중력 점수로부터 사용자에게 집중도를 높여주는 UX/UI를 제공한다. 타이머를 시작하면 웹캠과 인공지능 모델 역시 추론을 시작한다. 모델이 판단할 때 집중도가 높은 경우에는 잘하고 있다는 메세지를 띄워주며, 집중도가 낮을 때는 "산만해", 사람이 인식되지 않을 경우에는 "어디 갔어?"를 메세지와 함께 음성으로 알려주며 집중을 할 수 있도록 보조한다.

![https://user-images.githubusercontent.com/46708207/98789965-61ad7380-2446-11eb-8fc2-bfd769c29c78.png](https://user-images.githubusercontent.com/46708207/98789965-61ad7380-2446-11eb-8fc2-bfd769c29c78.png)