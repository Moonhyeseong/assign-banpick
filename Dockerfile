FROM node:18.8.0

#디렉토리 지정

WORKDIR /app


COPY . .

ENV NEXT_PUBLIC_BASE_API_URL="http://banpick.back.ps9.ps-analytics.com" \
    NEXT_PUBLIC_API_PORT="" 

#의존성 설치
RUN yarn

#nextjs 앱 빌드
RUN yarn build

#포트를 3000으로 설정
EXPOSE 3000

#애플리케이션 실행
CMD ["yarn","start"]



