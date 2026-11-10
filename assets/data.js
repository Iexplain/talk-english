/* Talk Talk Talk 1 — course data.
   This is the single source of truth for the sidebar and the pager.
   To publish a new lesson: add its `sections` here and set `ready: true`. */

window.TALK_DATA = {
  parts: [
    { id: 'part-1', name: 'Part I', sub: 'Answer These Questions', desc: '看图说话' },
    { id: 'part-2', name: 'Part II', sub: 'Everyday Questions', desc: '日常问答' },
    { id: 'part-3', name: 'Part III', sub: 'Let\'s Practice Making Questions', desc: '主动提问' },
    { id: 'part-4', name: 'Part IV', sub: 'What Do You Think?', desc: '观点表达' }
  ],

  lessons: [
    { no: 1, part: 'part-1', title: 'What Do These Signs Mean?', page: 'p.10',
      href: 'lessons/lesson-01.html', ready: true,
      sections: [
        { id: 'frame',   t: '回答骨架' },
        { id: 'grammar', t: '标志的形状规律' },
        { id: 'example', t: '课本标准答案' },
        { id: 'signs',   t: '十个标志' },
        { id: 'vocab',   t: '重点词汇' },
        { id: 'qa',      t: '老师会问什么' },
        { id: 'fix',     t: '容易犯的错' },
        { id: 'plan',    t: '怎么用这 50 分钟' }
      ] },
    { no: 2,  part: 'part-1', title: 'What Are They For?', page: 'p.12',
      href: 'lessons/lesson-02.html', ready: true,
      sections: [
        { id: 'frame',   t: '回答骨架' },
        { id: 'pattern', t: '用途的五种说法' },
        { id: 'example', t: '课本标准答案' },
        { id: 'items',   t: '十个物品' },
        { id: 'vocab',   t: '重点词汇' },
        { id: 'qa',      t: '老师会问什么' },
        { id: 'fix',     t: '容易犯的错' },
        { id: 'plan',    t: '怎么用这 50 分钟' }
      ] },
    { no: 3,  part: 'part-1', title: 'What Do You Say?', page: 'p.14',
      href: 'lessons/lesson-03.html', ready: true,
      sections: [
        { id: 'frame',   t: '回答骨架' },
        { id: 'pattern', t: '整块背，别拼' },
        { id: 'example', t: '课本标准答案' },
        { id: 'items',   t: '十五个场景' },
        { id: 'vocab',   t: '重点词汇' },
        { id: 'qa',      t: '老师会问什么' },
        { id: 'fix',     t: '容易犯的错' },
        { id: 'plan',    t: '怎么用这 50 分钟' }
      ] },
    { no: 4,  part: 'part-1', title: 'When Do You Say This?', page: 'p.18',
      href: 'lessons/lesson-04.html', ready: true,
      sections: [
        { id: 'frame',   t: '回答骨架' },
        { id: 'pattern', t: '20 句的共同规律' },
        { id: 'example', t: '课本标准答案' },
        { id: 'items',   t: '二十句话' },
        { id: 'vocab',   t: '重点词汇' },
        { id: 'qa',      t: '老师会问什么' },
        { id: 'fix',     t: '容易犯的错' },
        { id: 'plan',    t: '怎么用这 50 分钟' }
      ] },

    { no: 5,  part: 'part-2', title: '“Do You Like” Questions', page: 'p.24',
      href: 'lessons/lesson-05.html', ready: true,
      sections: [
        { id: 'frame', t: '回答骨架' },
        { id: 'pattern', t: '三种问法五档答法' },
        { id: 'items', t: '三十五个问题' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 6,  part: 'part-2', title: '“Do You Think You Are” Questions', page: 'p.32',
      href: 'lessons/lesson-06.html', ready: true,
      sections: [
        { id: 'frame', t: '回答骨架' },
        { id: 'pattern', t: '三种打法与软化开场' },
        { id: 'items', t: '二十五个问题' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 7,  part: 'part-2', title: '“What” Questions', page: 'p.38',
      href: 'lessons/lesson-07.html', ready: true,
      sections: [
        { id: 'frame', t: '回答骨架' },
        { id: 'pattern', t: '七种 What 问法' },
        { id: 'items', t: '二十五个问题' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 8,  part: 'part-2', title: '“Who” Questions', page: 'p.44',
      href: 'lessons/lesson-08.html', ready: true,
      sections: [
        { id: 'frame', t: '回答骨架' },
        { id: 'pattern', t: '四种 Who 问法' },
        { id: 'example', t: '课本例题' },
        { id: 'items', t: '二十个问题' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 9,  part: 'part-2', title: '“Where” Questions', page: 'p.50',
      href: 'lessons/lesson-09.html', ready: true,
      sections: [
        { id: 'frame', t: '回答骨架' },
        { id: 'pattern', t: '四组介词' },
        { id: 'example', t: '课本例题' },
        { id: 'items', t: '十五个问题' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 10, part: 'part-2', title: '“Why” Questions', page: 'p.54',
      href: 'lessons/lesson-10.html', ready: true,
      sections: [
        { id: 'frame', t: '回答骨架' },
        { id: 'pattern', t: '两类 Why 的答法' },
        { id: 'example', t: '课本例题' },
        { id: 'items', t: '二十个问题' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 11, part: 'part-2', title: '“When” Questions', page: 'p.60',
      href: 'lessons/lesson-11.html', ready: true,
      sections: [
        { id: 'frame', t: '回答骨架' },
        { id: 'pattern', t: '七种时态' },
        { id: 'example', t: '课本例题' },
        { id: 'items', t: '十五个问题' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 12, part: 'part-2', title: '“How” Questions', page: 'p.64',
      href: 'lessons/lesson-12.html', ready: true,
      sections: [
        { id: 'frame', t: '回答骨架' },
        { id: 'pattern', t: '五种 How 问法' },
        { id: 'example', t: '课本例题' },
        { id: 'items', t: '十五个问题' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 13, part: 'part-2', title: '“How Often” Questions', page: 'p.68',
      href: 'lessons/lesson-13.html', ready: true,
      sections: [
        { id: 'frame', t: '回答骨架' },
        { id: 'pattern', t: '频率的两套表达' },
        { id: 'example', t: '课本例题' },
        { id: 'items', t: '二十个问题' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 14, part: 'part-2', title: '“How To” Statements', page: 'p.74',
      href: 'lessons/lesson-14.html', ready: true,
      sections: [
        { id: 'frame', t: '回答骨架' },
        { id: 'pattern', t: '说明文的四件套' },
        { id: 'example', t: '课本例题' },
        { id: 'items', t: '二十个问题' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 15, part: 'part-2', title: '“Have You Ever” Questions', page: 'p.80',
      href: 'lessons/lesson-15.html', ready: true,
      sections: [
        { id: 'frame', t: '回答骨架' },
        { id: 'pattern', t: '时态切换与三种答法' },
        { id: 'example', t: '课本例题' },
        { id: 'items', t: '二十个问题' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 16, part: 'part-2', title: '“I Wonder If” Questions', page: 'p.86',
      href: 'lessons/lesson-16.html', ready: true,
      sections: [
        { id: 'frame', t: '回答骨架' },
        { id: 'pattern', t: '陈述语序与三种功能' },
        { id: 'example', t: '课本例题' },
        { id: 'items', t: '十个问题' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },

    { no: 17, part: 'part-3', title: 'Make a Question Starting with “What”', page: 'p.88',
      href: 'lessons/lesson-17.html', ready: true,
      sections: [
        { id: 'frame', t: '造问句的骨架' },
        { id: 'pattern', t: '助动词配方表' },
        { id: 'example', t: '课本例题' },
        { id: 'items', t: '二十个陈述句' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 18, part: 'part-3', title: 'Make a Question Starting with “When”', page: 'p.94',
      href: 'lessons/lesson-18.html', ready: true,
      sections: [
        { id: 'frame', t: '造问句的骨架' },
        { id: 'pattern', t: '三个时间维度' },
        { id: 'example', t: '课本例题' },
        { id: 'items', t: '十五个陈述句' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 19, part: 'part-3', title: 'Make a Question Starting with “How”', page: 'p.98',
      href: 'lessons/lesson-19.html', ready: true,
      sections: [
        { id: 'frame', t: '造问句的骨架' },
        { id: 'pattern', t: 'How 的七种延伸' },
        { id: 'example', t: '课本例题' },
        { id: 'items', t: '十五个陈述句' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 20, part: 'part-3', title: 'Make a Question Starting with “Where”', page: 'p.102',
      href: 'lessons/lesson-20.html', ready: true,
      sections: [
        { id: 'frame', t: '造问句的骨架' },
        { id: 'pattern', t: '地点介词与去留' },
        { id: 'example', t: '课本例题' },
        { id: 'items', t: '十五个陈述句' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 21, part: 'part-3', title: 'Make a Question Starting with “Why”', page: 'p.106',
      href: 'lessons/lesson-21.html', ready: true,
      sections: [
        { id: 'frame', t: '造问句的骨架' },
        { id: 'pattern', t: 'Why 的三种用法' },
        { id: 'example', t: '课本例题' },
        { id: 'items', t: '十五个陈述句' },
        { id: 'vocab', t: '重点词汇' },
        { id: 'qa', t: '老师会问什么' },
        { id: 'fix', t: '容易犯的错' },
        { id: 'plan', t: '怎么用这 50 分钟' }
      ] },
    { no: 22, part: 'part-3', title: 'Ask Him', page: 'p.110' },
    { no: 23, part: 'part-3', title: 'Making Topical Questions', page: 'p.118' },

    { no: 24, part: 'part-4', title: 'What’s Happening?', page: 'p.124' },
    { no: 25, part: 'part-4', title: 'What’s Wrong?', page: 'p.130' },
    { no: 26, part: 'part-4', title: '“What Is It?” Questions', page: 'p.136' },
    { no: 27, part: 'part-4', title: 'Qualifications', page: 'p.142' },
    { no: 28, part: 'part-4', title: 'Duty', page: 'p.146' },
    { no: 29, part: 'part-4', title: 'Stereotypes', page: 'p.150' },
    { no: 30, part: 'part-4', title: 'Yes or No!', page: 'p.154' }
  ]
};
